# 🌿 Dr. Serena Blake – Professional Therapy Website

A modern, responsive therapy website built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn

### Local Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001)

## ✨ Features

- **Hero Section** with video background
- **About Section** with therapist credentials
- **Services** showcase with detailed descriptions
- **Booking System** for consultation appointments
- **Contact Forms** with validation and spam protection
- **FAQ Section** with interactive accordion
- **Responsive Design** for all devices

## 🛠 Tech Stack

- **Next.js 13.5.11** - React framework
- **React 18** - UI library
- **Tailwind CSS 3.3.5** - Styling
- **Framer Motion** - Animations
- **FormSubmit.co** - Email service

## 📧 Email Integration

### How It Works
1. **FormSubmit.co Service**: Free email service that handles form submissions
2. **Contact Form**: General inquiries sent directly to `shahmanan2116@gmail.com`
3. **Booking Form**: Appointment requests with date/time details sent to email
4. **No API Keys Required**: Works without any configuration

### Technical Details
- Uses FormSubmit.co free service
- Forms submit to `https://formsubmit.co/shahmanan2116@gmail.com`
- No environment variables needed
- Emails are sent automatically when forms are submitted

## 📁 Project Structure

```
app/
├── api/                    # API routes for forms
├── components/             # React components
│   ├── about/             # About section
│   ├── booking/           # Booking form
│   ├── contact/           # Contact forms
│   ├── services/          # Services display
│   └── ...
├── globals.css            # Global styles
└── page.js               # Home page

public/
├── images/               # Static images
└── videos/              # Background video
```

## 🔧 Available Scripts

```bash
npm run dev      # Development server (port 3001)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Code linting
```

## 📞 Contact

**Email**: shahmanan2116@gmail.com

---
