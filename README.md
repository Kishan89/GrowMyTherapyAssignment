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
- **📧 Fully functional contact form with email integration (Web3Forms)**
- **📅 Professional booking consultation page with date/time selection**
- **✉️ All submissions send emails to shahmanan2116@gmail.com**
- **⚡ Loading states and success notifications**
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
- **Email Service:** [Web3Forms](https://web3forms.com/) - Super simple email API
- **Notifications:** React Hot Toast
- **Fonts:** Supports Freight Display Pro / Sans Pro (manually included)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🗂 Folder Structure

app
├── components
│ ├── about
│ │ └── About.jsx
│ ├── common
│ │ └── FadeInSection.jsx
│ ├── contact
│ │ ├── Captcha.jsx
│ │ ├── ContactFooter.jsx
│ │ └── ContactForm.jsx
│ ├── faq
│ │ └── FAQ.jsx
│ ├── herosection
│ │ └── Hero.jsx
│ └── services
│ ├── OfficeHours.jsx
│ ├── QuoteSection.jsx
│ ├── RatesAndInsurance.jsx
│ ├── ServiceCard.jsx
│ └── Services.jsx
├── layout.js
├── page.js
├── globals.css

public
├── images
├── videos
├── next.svg
└── vercel.svg

node_modules

Other files:
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Kishan89/GrowMyTherapyAssignment.git
cd GrowMyTherapyAssignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Email Service (Super Easy!)

To enable email functionality:

1. Get free Web3Forms key (see [EMAIL_SETUP.md](./EMAIL_SETUP.md))
2. Update `.env.local` with your access key

**Quick Setup:**
```bash
# .env.local already exists, just add your Web3Forms key
```

### 4. Run Development Server

```bash
npm run dev
```

App will run on http://localhost:3000
