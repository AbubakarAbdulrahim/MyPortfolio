# Abubakar Abdulrahim — Portfolio

Personal portfolio website of **Abubakar Abdulrahim** — Software Engineer, Mobile App Developer (Flutter, Firebase), and Web Developer (React, Django), based in Kano, Nigeria.

Built to showcase production work across mobile, fintech, and public-safety applications.

🔗 **Live site:** [abubakarabdulrahim.vercel.app](#) 

---

## Overview

A dark-mode-first, performance-focused portfolio built with Next.js. The design blends Apple's spatial restraint, Google Material 3's purposeful motion, and Microsoft Fluent's layered depth into a single visual identity, anchored by an electric-blue accent.

**Sections:** Hero · About · Skills · Experience Timeline · Flagship Case Studies · Projects · Certifications & Education · Testimonials · Writing · Contact

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Content | MDX (blog/writing section) |
| Deployment | Vercel |

---

## Featured Case Studies

### Safetify — Real-Time Crowdsourced Incident Reporting & Safety Alert App
Three-tier mobile safety platform enabling geo-tagged incident reporting and radius-based push alerts.
**Stack:** Flutter · Firebase (Auth, Firestore, Cloud Messaging) · Google Maps API · Cloudinary
**Results:** 4.4/5 usability score · ~2.1s average alert delivery · validated through unit, integration, system, and usability testing

### BUK Student App
Firebase-backed mobile app built exclusively for Bayero University Kano students.
**Stack:** Flutter · Firebase Auth · Gemini 2.5 Flash API
**Modules:** Incident reporting · Lost & Found · Campus Updates · in-app AI assistant · full dark mode

### Tubali — OTP Authentication Migration
Migrated account activation, password reset, login PIN reset, and transaction PIN reset flows from email-link-based to OTP-based verification in a live fintech application.
**Stack:** Flutter · Provider · go_router · Dio · feature-first architecture

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/AbubakarAbdulrahim/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
portfolio/
├── app/                 # Next.js App Router pages & layouts
│   ├── page.tsx         # Home
│   ├── work/            # Case study pages
│   └── writing/         # MDX blog posts
├── components/          # Reusable UI components
├── content/             # MDX content & project data
├── public/              # Static assets, resume PDF, mockups
│   └── resume.pdf
├── styles/              # Global styles & design tokens
└── lib/                 # Utilities & helpers
```

---

## Customization

- **Design tokens** (colors, spacing, typography) — `styles/` and `tailwind.config.ts`
- **Project data** — `content/projects/`
- **Blog posts** — add `.mdx` files to `content/writing/`
- **Resume** — replace `public/resume.pdf`

---

## Roadmap

- [ ] Populate testimonials with real client and colleague quotes
- [ ] Add case-study screenshots and device mockups
- [ ] Publish first writing pieces on Flutter and on-device AI
- [ ] Add analytics
- [ ] Custom domain setup

---

## Contact

**Abubakar Abdulrahim**
📧 abubakarabdulrahimibrahim@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/abubakar-abdulrahim-8b8619228) · [GitHub](https://github.com/AbubakarAbdulrahim)
📍 Kano, Nigeria

---

## License

MIT — feel free to reference the structure, but please don't copy the content or personal branding.
