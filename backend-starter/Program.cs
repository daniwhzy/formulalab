using System.Text.Json;

// OPTIONAL standalone ASP.NET Core learning exercise: not needed by the static website.
// Requires .NET SDK 8+. Not compiled/tested in the artifact environment.
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var path = Path.Combine(app.Environment.ContentRootPath, "products.json");
var json = File.ReadAllText(path);
var products = JsonSerializer.Deserialize<List<Product>>(json,
    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new();

app.MapGet("/api/products", (string? q, string? type) =>
    products.Where(p =>
        (string.IsNullOrWhiteSpace(q) ||
         (p.Name + " " + p.Brand + " " + p.Inci).Contains(q, StringComparison.OrdinalIgnoreCase)) &&
        (string.IsNullOrWhiteSpace(type) || p.Type.Equals(type, StringComparison.OrdinalIgnoreCase))));

app.MapGet("/api/products/{id}", (string id) =>
{
    var p = products.FirstOrDefault(x => x.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
    return p is null ? Results.NotFound() : Results.Ok(p);
});

app.MapGet("/api/compare", (string first, string second) =>
{
    var a = products.FirstOrDefault(x => x.Id.Equals(first, StringComparison.OrdinalIgnoreCase));
    var b = products.FirstOrDefault(x => x.Id.Equals(second, StringComparison.OrdinalIgnoreCase));
    if (a is null || b is null) return Results.NotFound(new { error = "Unknown product ID." });
    var aa = Canonicalize(a.Inci); var bb = Canonicalize(b.Inci);
    var both = aa.Intersect(bb).OrderBy(x => x).ToArray();
    var unionCount = aa.Union(bb).Count();
    return Results.Ok(new {
        productA = a.Id, productB = b.Id,
        sameCategory = a.Type == b.Type,
        overlapPercent = unionCount == 0 ? 0 : (int)Math.Round(100.0 * both.Length / unionCount),
        sharedINCI = both,
        note = "INCI name overlap only; not evidence of same results, formulation or safety."
    });
});

app.Run();

static HashSet<string> Canonicalize(string inci) => inci.Split(',', StringSplitOptions.RemoveEmptyEntries)
    .Select(s => s.Trim().ToLowerInvariant())
    .Select(s => s is "aqua (water)" or "aqua/water/eau" ? "aqua" : s)
    .ToHashSet();

public sealed class Product
{
    public string Id { get; set; } = "";
    public string Brand { get; set; } = "";
    public string Name { get; set; } = "";
    public string Type { get; set; } = "";
    public int Size { get; set; }
    public decimal? RetailEUR { get; set; }
    public string Inci { get; set; } = "";
    public string Source { get; set; } = "";
}
