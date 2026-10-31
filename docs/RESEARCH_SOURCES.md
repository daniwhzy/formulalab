# FormulaLab — Research and source method

Checked: **30 October 2026**. Website research used official brand product pages, with external scientific ingredient dictionaries for background.

## Product-level sources

For **every** of the 20 product records, use its `source` property in `products.json` (also shown as **"ver INCI na marca / check brand INCI"** in the site). The records include:

- **The Ordinary**: Niacinamide 10% + Zinc 1%; Hyaluronic Acid 2% + B5 (with Ceramides); Salicylic Acid 2% Solution; Glycolic Acid 7% Toner; Natural Moisturizing Factors + HA; Alpha Arbutin 2% + HA; Retinol 0.2% in Squalane; Lactic Acid 10% + HA; Retinal 0.2% Emulsion.
- **Geek & Gorgeous**: B-Bomb; HA 5 Light; HA 5 Rich; Porefectly Clear; Cheer Up; Happier Barrier; Hydration Station; Jelly Joker; C-Glow; A-Game 5.
- **Good Molecules**: Niacinamide Serum. Only ingredient data included, not a locally verifiable EUR retail price.

Brand sites can change formulas and regional prices. Source URLs in records are the preferred primary evidence; names listed here are for navigation.

## Ingredient references

- COSMILE Europe: https://cosmileeurope.eu/ (ingredient background, properties and functions)
- European Commission CosIng: https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-ingredient-database_en (INCI glossary and functions; inclusion is **not** a safety approval)
- PubMed: https://pubmed.ncbi.nlm.nih.gov/ (research papers; check their quality, study design and applicability)

## Transparency and comparison method

1. Split published INCI labels by commas; trim spaces and normalize names conservatively.
2. Normalize obvious equivalents such as `Aqua (Water)` and `Aqua/Water/Eau` to `aqua`.
3. Compute **Jaccard overlap** = shared unique INCI names / all unique names from both lists.
4. Report the fraction as a **name-overlap percentage**, not as formulation equivalence or a predicted cosmetic result.
5. Restrict suggested alternatives to the same general type, with a different brand preferred if available.
6. Compare per 30 ml only when both values are known and in the same currency. No automatic Kz/EUR conversion.
7. Treat fragrance-name flags as *information only*, not allergy or safety conclusions.

### Important limitations

Ingredient ordering alone cannot reveal full percentages, quality, concentration, pH, manufacturing method, stability, skin response or efficacy. The algorithm is designed to be auditable, not medically predictive. Limitations must stay visible in UI.

### Local context

Angolan store prices and availability were intentionally **not invented**. Local Kz amounts must be entered by users only after checking sellers. If the project later captures store names, source links, and updated prices, attach the date and source per observation and obtain permission to reuse any commercial data or product photos.
