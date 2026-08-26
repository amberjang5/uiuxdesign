# Heeyeon Jang — UX/UI Portfolio (English)

A static, framework-free portfolio site (plain HTML/CSS/JS, no build step).

## Structure

- `index.html` — page shell (nav, footer, app container)
- `style.css` — all styles
- `script.js` — page data, render functions, and hash-based routing
- `images/` — all screenshots and mockups

## Run locally

Any static file server works, e.g.:

```
npx serve .
```

or just open `index.html` directly in a browser.

## Deploy to GitHub Pages

1. Push this folder's contents to a GitHub repository (e.g. as the repo root, or under `/docs`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch," pick the branch and folder (`/` or `/docs`) this content lives in.
4. Save — GitHub will publish the site at `https://<username>.github.io/<repo>/`.

No build tools, dependencies, or environment variables are required.
