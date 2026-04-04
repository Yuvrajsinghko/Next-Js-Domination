<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=40&pause=1000&color=FFFFFF&background=000000&center=true&vCenter=true&width=750&lines=Next.js+Domination+%F0%9F%96%A4;App+Router+%7C+SSR+%7C+SSG+%7C+API+Routes;The+React+Framework+for+Production." alt="Typing SVG" />

<br/>

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

<br/><br/>

> 🖤 *"Next.js doesn't just run in the browser. It runs everywhere — and so will you."*
>
> A commit-by-commit, concept-by-concept deep dive into **Next.js** — the full-stack React framework  
> powering everything from indie blogs to billion-dollar products.

<br/>

![GitHub repo size](https://img.shields.io/github/repo-size/Yuvrajsinghko/Next-Js-Domination?color=white&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Yuvrajsinghko/Next-Js-Domination?color=blue&style=flat-square)
![Commits](https://img.shields.io/badge/commits-40%2B-brightgreen?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-36.2%25-3178C6?style=flat-square&logo=typescript&logoColor=white)

</div>

---

## 🗺️ What Is This Repo?

**Next.js Domination** is my structured, hands-on journey through the Next.js **App Router** — mastering every concept from file-based routing all the way to server-side data fetching, API routes, layouts, metadata, and full-stack mini-projects.

Every folder = a concept drilled or a real project built. No shortcuts. Just clean code and deep understanding.

---

## 📂 Repo Structure & Learning Map

```
Next-Js-Domination/
│
├── 🌱 my-app/                  → First Next.js app — project setup & file structure
├── 🧪 nextjs-prac/             → Core concepts sandbox & experiments
│
├── 🗂️ layouts/                 → Root layouts, nested layouts, layout composition
├── 📐 templates/               → Template files — re-mounting on navigation
├── 🏷️ route-metadata/          → Static & dynamic metadata (title, description, og)
│
├── 🔀 dynamic-routes/          → [slug], [...catchAll], [[...optional]] routing
├── ↩️  redirects/               → next.config.js redirects & programmatic navigation
│
├── 🔧 next-backend/            → API Routes — GET/POST handlers, Route Handlers
│
├── 🎉 event-hype/              → 🚀 PROJECT: Event listing & details app
├── 🎬 movies-app-project/      → 🚀 PROJECT: Movies browser with dynamic routes
└── 🏆 prize-maniac/            → 🚀 PROJECT: Prize/giveaway themed app
```

---

## 🚀 Mini Projects

| # | Project | Description | Key Concepts |
|---|---------|-------------|--------------|
| 🎉 | **Event Hype** | Browse & explore events with dynamic detail pages | App Router, Dynamic Routes, Layouts |
| 🎬 | **Movies App** | Movie browser fetching data with SSR/SSG | Data Fetching, `[id]` Routes, Metadata |
| 🏆 | **Prize Maniac** | Prize & giveaway themed interactive app | Components, API Routes, Styling |

---

## 🧠 Concepts Covered

<table>
<tr>
<td valign="top">

### 📁 App Router & Routing
- ✅ File-based routing (`page.tsx`, `layout.tsx`)
- ✅ Nested layouts & route groups
- ✅ Dynamic routes — `[slug]`, `[id]`
- ✅ Catch-all routes — `[...params]`
- ✅ Optional catch-all — `[[...params]]`
- ✅ Redirects (config + programmatic)
- ✅ `not-found.tsx` & error boundaries

### 🧩 Layouts & Templates
- ✅ Root layout (`app/layout.tsx`)
- ✅ Nested layouts per route segment
- ✅ Templates — fresh mount on navigation
- ✅ Shared UI components across routes

</td>
<td valign="top">

### 🔍 Metadata & SEO
- ✅ Static metadata export
- ✅ Dynamic metadata with `generateMetadata()`
- ✅ Open Graph, Twitter card metadata
- ✅ Page titles, descriptions per route

### 🔧 Backend in Next.js
- ✅ Route Handlers (`route.ts`)
- ✅ GET & POST API endpoints
- ✅ Request & Response handling
- ✅ Server-side logic without Express

### ⚡ Data & Rendering
- ✅ Server Components (default)
- ✅ Client Components (`"use client"`)
- ✅ `fetch()` with Next.js caching
- ✅ Static & Dynamic rendering

</td>
</tr>
</table>

---

## 🛣️ Full Learning Roadmap

```
✅ Phase 1 — Foundations
   └── Project setup, file structure, pages, navigation (Link)

✅ Phase 2 — Routing Mastery
   └── Dynamic routes, catch-all, optional, redirects

✅ Phase 3 — Layouts & Templates
   └── Root layout, nested layouts, template files

✅ Phase 4 — Metadata & SEO
   └── Static metadata, generateMetadata(), OpenGraph

✅ Phase 5 — API Routes (Backend)
   └── Route Handlers, GET/POST, server-side logic

✅ Phase 6 — Real Projects
   └── Event Hype · Movies App · Prize Maniac

⬜ Phase 7 — Advanced (Coming Soon)
   └── Server Actions, Middleware, Auth (NextAuth)
   └── Database integration (Prisma / MongoDB)
   └── Deployment to Vercel
```

---

## ⚙️ Getting Started

### Prerequisites

```bash
node --version    # v18+ required
npm --version     # v9+
```

### Clone & Run Any Project

```bash
# 1. Clone the repo
git clone https://github.com/Yuvrajsinghko/Next-Js-Domination.git

# 2. Navigate into any project or concept folder
cd Next-Js-Domination/movies-app-project

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser 🚀

---

## 🗂️ Key Next.js File Conventions

```
app/
├── layout.tsx          ← Wraps all pages (persistent UI)
├── page.tsx            ← Route's UI (maps to a URL)
├── template.tsx        ← Like layout but re-mounts every time
├── loading.tsx         ← Suspense loading UI
├── error.tsx           ← Error boundary UI
├── not-found.tsx       ← 404 UI
└── route.ts            ← API Route Handler (backend)
```

---

## 💡 App Router vs Pages Router — Quick Cheat Sheet

```tsx
// ✅ App Router (what this repo uses — modern approach)
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  return { title: `Blog — ${params.slug}` }
}

// API Route Handler
// app/api/hello/route.ts
export async function GET(request: Request) {
  return Response.json({ message: "Hello from Next.js!" })
}
```

---

## 🛠️ Tech Stack

| Technology | Role |
|-----------|------|
| ![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat&logo=nextdotjs&logoColor=white) | Full-stack React framework |
| ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black) | UI component library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Type-safe JavaScript |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Core scripting |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Deployment platform |

---

## 📊 Language Breakdown

```
JavaScript   ████████████░░░░░░░░░░░░   48.8%
TypeScript   █████████░░░░░░░░░░░░░░░   36.2%
CSS          ████░░░░░░░░░░░░░░░░░░░░   15.0%
```

> The TypeScript share will keep growing as projects scale — type safety is the Next.js way 💙

---

## 🤝 Contributing

This is a personal learning repo — but if you find bugs or have suggestions, feel free to open an issue!

---

## 📬 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Yuvrajsinghko-181717?style=for-the-badge&logo=github)](https://github.com/Yuvrajsinghko)

</div>

---

<div align="center">

**React gives you the components. Next.js gives you the superpowers. 🖤**

*Found this useful? Drop a ⭐ and keep building!*

<img src="https://capsule-render.vercel.app/api?type=waving&color=000000&height=100&section=footer&fontColor=ffffff" width="100%"/>

</div>
