# 📝 Reb0rnedBlog

A modern and minimalistic blog platform built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Prisma ORM** connected to a **PostgreSQL** database (hosted on [Neon](https://neon.tech)). Authentication is powered by **Kinde**.

🌐 **Live Preview:** [next-blog-ebon-seven.vercel.app](https://next-blog-ebon-seven.vercel.app/)

---

## ⚙️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15
- **Language:** TypeScript
- **UI Library:** React 19 + Tailwind CSS
- **Authentication:** [Kinde Auth for Next.js](https://kinde.com/)
- **Database:** PostgreSQL (via [Neon](https://neon.tech))
- **ORM:** [Prisma](https://www.prisma.io/)
- **Component Primitives:** Radix UI
- **Hosting:** [Vercel](https://vercel.com/)

---

## ✨ Features

- ✅ Fully responsive layout
- 🔐 Secure login & register (via Kinde)
- 📰 Post grid with images, title, preview, author, and date
- 📄 Dynamic post pages
- 🧑‍💻 Auth-aware navbar (user avatar + logout)
- 🚫 Custom 404 page
- 📦 Clean file structure and modular components
- 🌱 Ready to scale and extend (tags, search, dashboard, etc.)

---

## Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/reb0rned/next_blog.git
cd tech-market
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up neon db environment variables + env vars for kinde auth

```bash
DATABASE_URL= (Link from neon here)

KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=
```

### 4. Start the development server

```bash
npm run dev
```
