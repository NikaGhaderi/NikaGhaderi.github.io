# nikaghaderi.github.io

Personal academic website of Nika Ghaderi: https://nikaghaderi.github.io

Built with Vite, React, and Tailwind CSS. Every push to `main` is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Local development

```bash
npm ci
npm run dev      # dev server
npm run build    # production build into dist/
npm run lint
```

## Where things are

- `src/App.jsx`: all page content (research, engineering, teaching, projects, skills, honors) is in the data arrays at the top of the file.
- `public/Nika_Ghaderi_CV.pdf`: the CV served by the "Download CV" button. Replace this file to update it.
- `public/profile.html`: the line-drawing portrait; its animation library is served locally from `public/vendor/` (anime.js 4.5.0, MIT).
