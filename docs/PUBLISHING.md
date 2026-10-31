# Publish FormulaLab v2 — GitHub Pages

The actual static website is ready to be uploaded but **not yet published**. Creating a public URL requires access to the project owner's hosting/GitHub account.

Official documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Publish the static files

1. Sign in to GitHub and create a public repository for this project (do not include personal/secret data).
2. Upload these exact website files to its repository root: `index.html`, `index-en.html`, `styles.css`, `app.js`, `data.js`, and the `assets/` folder.
3. In repository **Settings → Pages**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, and Save.
4. Use the GitHub Pages URL shown by GitHub once deployed. The website's `index.html` will be the Portuguese entry page.
5. Open it on mobile and desktop and complete every item in `USER_TESTING.md`.

The site is plain HTML/CSS/JavaScript and does not need the optional C# backend to run. GitHub Pages does **not** run C# backend code. If you later add a shared database or API, it will need a separate supported server or managed service.

## Privacy, cost and licensing

- No personal data is needed to use the core product comparison.
- Local favorites, prices, feedback and metrics stay inside each browser. No response is automatically sent to the creator. Users have to **download/export and send feedback themselves**.
- Local usage counters are not public impact statistics; they count actions on one device only.
- Do not put personal details, hidden tokens or passwords in a public repository.
- Official brand INCI sources are referenced as informational citations. Logo/photo rights are not provided; the bottle art in the site is generic CSS, not an official product image.
- Consider privacy and consent before adding analytics, login or personal skin profiles.

For direct offline testing, double-click `index.html` after extracting. Features based on localStorage may behave differently when opened as a `file://` URL; hosting is recommended for consistent storage across PT/EN.
