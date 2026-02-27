# South Gujarat Group (SGG) Website

Official website for the **South Gujarat Group (SGG)** community in North America.

SGG is a community of people with roots in South Gujarat, currently residing in the United States and Canada. The site helps members stay connected, support newcomers, and grow professional and social networks.

---

## 🌍 Live Website

- GitHub Pages: https://boneyp003.github.io/sgg-website/

---

## 🚀 Tech Stack

- **Vite** + **React (TypeScript)**
- **React Router** (**HashRouter** for GitHub Pages compatibility)
- **Tailwind CSS**
- **GitHub Actions** (CI/CD)
- **GitHub Pages** (Hosting)

---

## ✨ What’s Inside

- Responsive layout
- Floating top navigation
- **About** page (vision, purpose, and tenets)
- **Events** page with reusable `EventCard` component
- Config-driven copy via `src/lib/site.ts`
- Simple, neutral theme (clean and professional)

---

## 🗂 Project Structure

```text
src/
  components/
    EventCard.tsx
  layout/
    Layout.tsx
    Navbar.tsx
  pages/
    Home.tsx
    About.tsx
    Events.tsx
  lib/
    site.ts
    events.ts
```

---

## 🧑‍💻 Local Development

Clone and run locally:

```bash
git clone https://github.com/boneyp003/sgg-website.git
cd sgg-website
npm install
npm run dev
```

Vite dev server runs at:

```text
http://localhost:5173
```

---

## 📦 Build

```bash
npm run build
```

Production output goes to:

```text
dist/
```

---

## 🚀 Deployment

Deployments are automated via **GitHub Actions**.

Every push to `main`:
1. Builds the project
2. Publishes to **GitHub Pages**

---

## 🎯 Community Vision (Summary)

- Assist and guide newcomers (professional guidance focus)
- Strengthen community connections across regions
- Operate in a non-profit way with minimal expenses
- Maintain cultural alignment
- Keep discussions focused (no politics, no irrelevant forwards)
- Protect member privacy (no sharing member info with third parties)

---

## 🤝 Contributing

If you’re part of the SGG community and want to contribute:

1. Fork the repo
2. Create a feature branch (`feat/...`)
3. Open a Pull Request

Ideas:
- Add real RSVP + calendar links to Events
- Add “How to Join” integrations (WhatsApp invite, Tally/Formspree, etc.)
- Improve SEO + social preview image
- Add photos/highlights from meetups

---

## 📬 Contact

- Email: (update in `src/lib/site.ts`)
- WhatsApp: (add invite link in About page)

---

## License

TBD (add a license if/when you want this to be open-source).
