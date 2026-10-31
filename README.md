# FormulaLab ♡ — v2.0 (PT / EN)

**FormulaLab** is a student-made, Y2K-inspired skincare ingredient comparison website with 20 real product records sourced from official brand pages (manual check: **2026-10-30**). It is an educational **research prototype**, not a certification of efficacy, safety, skin-type suitability, or a shopping marketplace.

## Open the site

1. Extract the whole ZIP, keeping the folders together.
2. Open `index.html` for Portuguese (default), or `index-en.html` for English.
3. Switch languages using **PT / EN** in the header.
4. For consistent saved favorites / feedback between languages, use a web server or host the site via GitHub Pages. Some browsers treat `file://` storage differently.

A locally hosted preview can be started in the extracted folder if Python is installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Features (v2)

- The Y2K visual identity with the owner's original mascot illustration.
- 20 named real products, 3 brands, ingredient lists from linked **official** brand websites.
- Product search, category and *informational* skin-type filters (not medical suitability ratings).
- "Find a similar alternative" sorts candidates in the same product category by **Jaccard overlap of INCI names**. It preferentially compares a different brand, when available.
- Two-column product comparison: exact INCI names shared and unique, ingredient-role notes, plain-language science, and warnings about interpretation.
- Retail **EUR reference prices** where a verifiable price for the stated size was available. These are NOT prices/availability in Angola.
- User-entered local **Kz prices** and cost-per-30-ml comparison: stored only in that browser; not automatically verified.
- Ingredient decoder (curated beginner dictionary). Unknown ingredients are explicitly marked as unknown.
- Favorites saved locally, optional user feedback saved locally and exportable as JSON.
- Local-only mini usage counter: searches, comparisons, decoder uses, favorites added. The counters are **not global analytics**.

## Limitations & honesty

- Two products sharing 80% of ingredient **names** are **not** demonstrated to perform equally or to be 80% chemically equivalent. Full concentrations, ingredient grades, pH, manufacturing, stability, and testing are normally unavailable.
- INCI listings may change by date, packaging or market. Always verify official product pages and the package before use.
- The website does not assess allergies, give diagnoses or medical recommendations, or guarantee that products are suitable for a skin type.
- No verified Angola seller data, real-time stock, exchange rates, or online orders are integrated.
- The data is manually curated and NOT a live product feed. The site is not affiliated with the brands. No affiliate links.
- The website is **not hosted online yet**. The owner must publish it using an account (e.g. GitHub Pages).
- Browser-based integration and mobile visual QA need user verification. Core algorithm automated checks passed; see `test_core.js`.

## Main project files

- `index.html`: Portuguese version.
- `index-en.html`: English version.
- `styles.css`: site design.
- `app.js`: catalog, similarity, cost comparison, favorites, feedback, metrics.
- `data.js`: 20 sourced products loaded by both language pages.
- `products.json`: portable product data for future applications or APIs.
- `assets/mascot.jpg`: original mascot provided by the project owner.
- `docs/RESEARCH_SOURCES.md`: method and sources.
- `docs/USER_TESTING.md`: realistic test procedure and questions.
- `docs/PROJECT_PROGRESS.md`: development log and earlier audience feedback.
- `docs/PUBLISHING.md`: steps for publishing a static website.
- `test_core.js`: local logic test (`node test_core.js`).
- `backend-starter/`: optional C# ASP.NET Core API starter. Not connected to the static site; requires .NET SDK and has not been compiled here.

## Technology

HTML, CSS, vanilla JavaScript, localStorage. No database server is needed for the current website. A C# service can be added later when public accounts, shared feedback, or database operations become necessary. Do not collect health or other personal information without consent and an appropriate privacy plan.

## Maintain the product dataset

For each product in `products.json` update: `name`, `brand`, `size` (ml), `inci` (exact published string), `source` (official URL), `checked` (date), and `retailEUR` (only for that size/market where verified; otherwise `null`). Make the same update in `data.js` or generate it from `products.json` when developing further.

## Testing

The code was syntax-checked with Node and the pure calculation and data consistency tests were run. The environment's browser policy blocked visual browser testing; UI behavior still needs a manual browser smoke test. The 3 earlier sketch-feedback messages are documented as supplied by the project owner, not as independently verified users of this functional version.


## v2.1 — Official mascot set (2026-10-30)

Six individual transparent-background PNG mascot illustrations are saved in `assets/avatars/` and used in the Portuguese and English interfaces:

- `welcome.png` — homepage and about panel;
- `happy.png` — shown when the dupe finder selects a candidate to investigate;
- `thinking.png` — product comparison panel;
- `explaining.png` — ingredient decoder;
- `warning.png` — scientific limits and comparison cautions;
- `love.png` — favorites section.

All six images are cropped directly from the six-character composite provided by the project owner; these are not new or redesigned characters. They are displayed with descriptive image alt text, and labels are bilingual. The matching score remains an INCI-name-overlap calculation, not a claim of matching performance. Frontend testing instructions are unchanged.
