# FormulaLab — Week 4 and beyond: real testing plan

**No tests with people are claimed to have happened for v2.** This is a practical protocol to be carried out before public launch.

## Testing with 5 people (suggested initial round)

Show each participant the website on a phone or computer. Ask them to complete tasks independently while you observe, without giving away button locations:

1. Find **B-Bomb** using search.
2. Compare **B-Bomb** to **The Ordinary Niacinamide 10% + Zinc 1%**.
3. Explain what the displayed percentage means, in their own words.
4. Find the official INCI source for one product.
5. Decode a short ingredient list and identify one ingredient with an explanation.
6. Enter two *sample* Kz prices clearly labeled as **test values**, then explain which has a lower price per 30 ml.
7. Save a favorite and change from PT to EN.

For each task note: **completed alone?**, **time**, **errors / confusing parts**, **exact feedback quote** (with permission), and **possible fix**. Do not include people’s names, health details, precise location, or other personal data.

## Questions

- Was it easy to understand the purpose of the website?
- Did the design feel readable on your screen?
- Was it clear that *ingredient overlap is NOT the same as product effectiveness*?
- Did you understand when a price was in EUR vs Kz?
- What information did you want but could not find?
- What would you change first?

## Quality checklist (developer)

- [ ] PT homepage, search, comparison, decoder and feedback work.
- [ ] EN homepage, search, comparison, decoder and feedback work.
- [ ] Both languages have the same 20 sourced records.
- [ ] Both source links for a comparison open the correct brand pages.
- [ ] Niacinamide comparison lists common Niacinamide and Zinc PCA.
- [ ] All filters including "exfoliants" can be selected and cleared.
- [ ] An ingredient not in the dictionary is not assigned invented chemistry.
- [ ] A cross-category comparison is clearly marked as not a dupe.
- [ ] Prices in Kz do not appear as store-verified when entered by user.
- [ ] No inappropriate similarity/effectiveness claims.
- [ ] Phone layout, readable text, keyboard controls and high contrast.
- [ ] Favorites, local price inputs, and feedback export after hosting (storage with file:// may vary).
- [ ] Refresh the page and check that stored data behaves as intended.
- [ ] Confirm none of the 20 official source links are broken; recheck product formulas and sizes.

## Example results log (fill only with actual results)

| Date | Participant code | Task | Completed alone? | Issue observed | Change made |
|---|---|---|---|---|---|
| | P01 | Product search | | | |
| | P02 | INCI overlap explanation | | | |
| | P03 | Compare price per 30 ml | | | |

If publishing publicly, start by testing without collecting personal health information and keep an appropriate privacy/consent plan.
