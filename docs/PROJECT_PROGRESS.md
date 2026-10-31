# FormulaLab — authentic project development log

## Milestones

- **Idea / motivation:** skincare dupe finder combining chemistry, programming, information accessibility, and affordable options.
- **Ingredient research:** 10 common skincare ingredients and easy-English explanations.
- **Target audience:** teens / young adults and beginner skincare shoppers; affordability and ingredient clarity are the main problems.
- **Features and prototypes:** product search, ingredient decoder, INCI comparison, budget comparison, favorites; playful Y2K palette and a user-provided avatar.
- **First UX feedback on sketches:** 3 responses provided by the student, before this working v2 implementation.
- **v1:** original local demo with synthetic products; **v1.1/v1.2:** Portuguese and bilingual variants.
- **v2.0, 30 Oct 2026:** curated 20-product research dataset with official URLs, Jaccard algorithm and transparency notices, price inputs in Kz, local feedback/metrics, improved reading contrast and filters.

## Feedback received about original wireframes (N=3)

- All 3 liked the colors/design and found the homepage and search easy.
- All 3 liked the mascot idea.
- 2/3 reported the comparison page "very easy"; 1/3 "mostly easy".
- Repeated requests: improve contrast of small gray text, show brands/products/prices near comparisons, clarify the meaning of similarity, add skin concerns tags, make costs clearer, include avatar tips.

These were **feedback messages supplied to the project owner** about sketches. They are *not* measured usability results for v2, and should not be presented as statistically representative.

## What changed in v2 because of that feedback

- More readable captions and outlines.
- Side-by-side comparison includes real product brand/name, size and source.
- The score has an explicit name, number and visual bar; its limits are explained.
- When supported, cost per 30 ml is shown, including editable local Kz data.
- Skin-type filter is added as informational, not a suitability or safety score.
- Mascot appears in the formula explanation.
- Science sources and an explicit transparency section were added.

## Unfinished / future work

- Real feedback on v2 by people who actually use the functional website.
- Verify retailers, stock, and source-tracked Angolan price data.
- Public hosting, public usage stats and any account-based features (requires appropriate accounts, privacy design and permissions).
- Richer ingredient ontology, versions of product labels by country/date, confidence scoring, and scientific evaluation against expert judgments.
- Backend/database integration, only if really necessary for scale.

## Research question for a college portfolio

**How useful can a transparent ingredient-name matching algorithm be for discovering possible skincare alternatives, and where does it fail compared with a chemist's assessment?**

Study design: build a product dataset, compare multiple matching methods and category filters, ask knowledgeable reviewers to check a sample, record false matches and uncertainty, and report your failures and improvements.
