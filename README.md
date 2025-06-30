# Dr. Serena Blake – Therapy Website

Live URL: [https://drserenablake-omega.vercel.app/](https://drserenablake-omega.vercel.app/)

A fully responsive and professional therapist website built with **Next.js 14**, **Tailwind CSS**, and **React Components**, designed as an internship assignment. The site showcases services, contact options with reCAPTCHA, FAQs, and smooth scroll-based animations.

---

## 🔗 Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Screenshots](#screenshots)
- [License](#license)

---

## 🌐 Live Demo

📍 **Website:** [https://drserenablake-omega.vercel.app/](https://drserenablake-omega.vercel.app/)

---

## ✅ Features

- Elegant hero section with video background
- Responsive design across all devices
- Scroll-based reveal animations using custom `FadeInSection`
- Service cards with optimized layout and transitions
- Fully validated contact form with Google reCAPTCHA v2
- FAQ accordion using Lucide Icons
- Integrated Adobe Fonts / Custom Fonts support (optional)
- Clean and semantic Tailwind utility classes
- Hosted on Vercel for instant deployment

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** Custom scroll reveal with `useEffect`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Supports Freight Display Pro / Sans Pro (manually included)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🗂 Folder Structure

📁 app/
┣ 📁 components/ → Reusable sections: Hero, About, Services, Contact, FAQ
┃ ┣ 📄 Hero.jsx
┃ ┣ 📄 About.jsx
┃ ┣ 📄 Services.jsx
┃ ┣ 📄 Contact.jsx
┃ ┣ 📄 FAQ.jsx
┃ ┗ 📄 FadeInSection.jsx → Scroll-triggered reveal animation
┣ 📄 layout.js → Root layout
┣ 📄 page.js → Main landing page
┣ 📁 public/
┣ 📁 image/ → Images used across site
┃ ┣ 📄 logo.png, bg.png
┃ ┣ 📄 Service1.jpg, ...
┣ 📄 bg.mp4 → Video background for hero
┣ 📄 globals.css → Global Tailwind + font styles
┣ 📄 tailwind.config.js
┣ 📄 next.config.js
┣ 📄 package.json

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Kishan89/GrowMyTherapyAssignment.git
cd GrowMyTherapyAssignment

```

npm install
npm run dev
App will run on http://localhost:3000
