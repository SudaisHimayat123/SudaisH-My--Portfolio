# 🚀 Sudais Himayat — Personal Portfolio

A modern, fully responsive personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features dark/light mode, glassmorphism UI, smooth animations, and an accessible contact form.

---

## ✨ Features

- ⚡ **Next.js 14** App Router
- 🎨 **Tailwind CSS** with custom theme
- 🎬 **Framer Motion** animations throughout
- 🌙 **Dark / Light Mode** toggle
- 📱 **Fully Responsive** — mobile, tablet, desktop
- ♿ **Accessible** — ARIA labels, focus management
- 🔍 **SEO Optimized** — metadata, Open Graph
- 🪄 **Glassmorphism** cards with custom scrollbar
- 💌 **Contact Form** with client-side validation

---

## 📁 Project Structure

```
sudais-portfolio/
├── app/
│   ├── layout.tsx                  # Root layout with ThemeProvider
│   └── page.tsx                    # Main page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Nav with active section tracking
│   │   └── Footer.tsx              # Footer + back-to-top
│   ├── sections/
│   │   ├── HeroSection.tsx         # Hero with typewriter effect
│   │   ├── AboutSection.tsx        # Bio + education
│   │   ├── SkillsSection.tsx       # Animated skill bars
│   │   ├── ExperienceSection.tsx   # Timeline layout
│   │   ├── ProjectsSection.tsx     # AI + other projects
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx      # Contact form
│   └── ui/
│       └── SectionHeader.tsx       # Reusable heading
├── data/
│   └── portfolio.ts                # All data lives here
├── styles/
│   └── globals.css                 # CSS vars, scrollbar, utilities
├── .env.example
├── tailwind.config.js
└── next.config.js
```

---

## 🛠️ Installation

### Prerequisites
- Node.js v18+  |  npm / yarn / pnpm

### Steps
```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local

# 3. Start dev server
npm run dev
```

Open http://localhost:3000

### Production Build
```bash
npm run build && npm start
```

---

## ✏️ Customization

Edit **`data/portfolio.ts`** to update all your personal info, skills, projects, and certifications — no other files need to change.

### Contact Form Integration

**Formspree (easiest):**
1. Sign up at formspree.io → get your endpoint
2. Add `NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/xxx` to `.env.local`
3. Replace the simulated fetch in `ContactSection.tsx`

**EmailJS:**
1. Sign up at emailjs.com and create a service + template
2. Add the three EMAILJS env vars
3. `npm install @emailjs/browser`

---

## 🚀 Deploy to Vercel

**Option 1 — CLI:**
```bash
npm install -g vercel && vercel
```

**Option 2 — Dashboard:**
1. Push to GitHub
2. Go to vercel.com → New Project → Import repo
3. Add environment variables
4. Click Deploy 🎉

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| next-themes | Dark/light mode |
| lucide-react | Icons |
| react-hot-toast | Notifications |

---

Made with ❤️ by **Sudais Himayat**
GitHub: https://github.com/SudaisHimayat123
LinkedIn: https://linkedin.com/in/sudaishimayat
