# TNBNU Media — Film & Photography Studio

Official production website for **TNBNU Media**, a film and photography studio based between **Nairobi** and the **Maasai Mara**, founded and led by cinematographer **Japheth Tanabanu**.

## Architecture & Stack

- **Framework:** React 18 + TypeScript
- **Build System:** Vite 6 (`base: '/TNBU/'` configured for `https://techygggf.github.io/TNBU/`)
- **Styling:** Tailwind CSS v4 + editorial dark cinema design system
- **Client-Side Routing:** React Router v6 (`BrowserRouter`) paired with `public/404.html` + `index.html` SPA deep-link restoration and `public/.nojekyll`
- **CI/CD:** Official GitHub Pages Actions workflow (`.github/workflows/deploy.yml`, with a tracked reference copy in `github-pages-workflow/deploy.yml`)

## Pages & Features

- **`/` (Homepage):** Full-viewport crossfading Mara/Zanzibar/Nairobi hero, Studio Manifesto, Filterable Selected Filmography, How We Work & 3-Stage Production Services, Frames From the Field preview, and Interactive FAQ.
- **`/works` (Our Films):** Complete filmography & case study directory with category/sector filtering and inline Screening Room playback.
- **`/works/:slug` (Individual Film Case Studies):**
  - `/works/pearl-mara` — *Beyond the Wild* (Pearl Mara · Maasai Mara, Kenya)
  - `/works/elias-jewellers` — *Heart of the Ocean* (Elias Jewelers · Zanzibar, Tanzania)
  - `/works/eleven-motors` — *Me and My Friend* (Eleven Motors · Nairobi, Kenya)
  - `/works/endurance-and-beyond` — *Endurance and Beyond* (Pearl Mara · Maasai Mara, Kenya)
- **`/photography` (Photography Archive):** 19 high-resolution TNBNU Media production frames organized by collection with full-screen keyboard-accessible Lightbox.
- **`/about` (Who We Are & Services):** Studio ethos, Japheth Tanabanu leadership note, 3-clients-at-a-time commitment, and Concept → Craft → Post & Studio capabilities.
- **`/contact` (Contact & Brief Composer):** Interactive project brief builder dispatching directly via Email (`japheth@tnbnu.media` / `tnbnumedia@gmail.com`) or WhatsApp (`+254 793 635 942`).

## Local Development & Build

```bash
npm install
npm run dev      # Local dev server
npm run build    # TypeScript check + production build into ./dist
npm run preview  # Preview production ./dist bundle
```

## Activating GitHub Pages Deployment

1. **Make Repository Public (Required on GitHub Free for GitHub Pages):**
   - Go to **Settings → General → Danger Zone → Change repository visibility → Make public**.
2. **Enable GitHub Pages via GitHub Actions:**
   - Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. **Add Workflow File on GitHub (if pushed via GitHub App without `workflows` scope):**
   - On GitHub (`https://github.com/TechyGGGF/TNBU`), click **Add file → Create new file**, name it `.github/workflows/deploy.yml`, paste the contents of `github-pages-workflow/deploy.yml`, and commit directly to `main`.
   - GitHub Actions will immediately build `./dist` and publish to **`https://techygggf.github.io/TNBU/`**.

## Updating Content in the Future

All films, case study stories, credits, photography stills, FAQs, and studio contact details live in a single typed file:

- `src/data/studioData.ts`

Edit `src/data/studioData.ts`, commit, and push to `main` — GitHub Actions will automatically rebuild and publish the updated site.
