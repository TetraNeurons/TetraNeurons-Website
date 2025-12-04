# TetraNeurons Company Website

A modern, responsive company website for TetraNeurons Software Company built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

TetraNeurons is an AI-driven software company specializing in innovative solutions, Web3 technologies, and award-winning hackathon projects. This website showcases their mission, projects, team, and achievements.

## 📋 Features

### Pages Implemented

1. **Home Page** (`/`)
   - Hero section with company mission
   - Achievement statistics (3+ Projects, 5+ Hackathon Wins, 72h Fastest Build, 100% Dedication)
   - "Why Choose TetraNeurons?" feature cards
   - Featured projects showcase
   - Call-to-action sections

2. **About Page** (`/about`)
   - Company mission and vision
   - Core values (Innovation, Excellence, Collaboration, Sustainability)
   - Hackathon achievements timeline
   - Team culture overview

3. **Projects Page** (`/projects`)
   - Comprehensive project portfolio (6 projects)
   - Project cards with:
     - Category and status badges
     - Detailed descriptions
     - Key features
     - Technology stack
   - Projects included:
     - Agriලංකා (Agriculture Marketplace)
     - Web3.0 Sustainable Healthcare Ecosystem
     - Ballerina Competition Platform
     - AI-Powered CRM System
     - Agentic AI Assistant
     - Cloud Infrastructure Optimization

4. **Team Page** (`/team`)
   - Team member profiles (6 roles)
   - Expertise tags for each member
   - Team culture values
   - Team achievements statistics
   - Join our team CTA

5. **Contact Page** (`/contact`)
   - Contact form (Name, Email, Subject, Message)
   - Social media links:
     - LinkedIn
     - Facebook
     - Instagram
     - TikTok
     - YouTube
   - FAQ section
   - Response time information

### Components

- **Navbar** - Sticky navigation with mobile menu toggle
- **Footer** - Footer with social links and quick navigation
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7
- **React**: 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Font**: Geist Sans & Geist Mono (Google Fonts)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ (or use the pre-installed version)
- pnpm (pre-installed)

### Installation

```bash
# Navigate to the project directory
cd tetraneurons-website

# Install dependencies (already done)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
tetraneurons-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── globals.css          # Global styles
│   │   ├── page.tsx             # Home page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── projects/
│   │   │   └── page.tsx         # Projects page
│   │   ├── team/
│   │   │   └── page.tsx         # Team page
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   └── components/
│       ├── Navbar.tsx           # Navigation component
│       └── Footer.tsx           # Footer component
├── public/                       # Static assets
├── package.json                  # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── tailwind.config.ts           # Tailwind CSS configuration
```

## 🎨 Design Highlights

- **Modern Gradient UI**: Blue to purple gradient theme
- **Smooth Animations**: Hover effects and transitions
- **Dark Mode Support**: Built-in dark mode compatibility
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and focus states
- **Performance**: Static generation for all pages

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Social Media Links

All social media links are integrated and point to:
- LinkedIn: https://www.linkedin.com/company/tetraneurons/
- Facebook: https://www.facebook.com/p/TetraNeurons-61579161331157/
- Instagram: https://www.instagram.com/tetra_neurons/
- TikTok: https://www.tiktok.com/@tetra.neurons
- YouTube: https://www.youtube.com/channel/UCNgwCDYf-UsstDY2ffe9BWg

## 🚀 Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)
```bash
pnpm build
# Deploy to Vercel
```

### Docker
```bash
docker build -t tetraneurons-website .
docker run -p 3000:3000 tetraneurons-website
```

## 📝 Content Management

All content is currently hardcoded in the components. For future enhancements:
- Consider using a CMS (Contentful, Sanity, etc.)
- Add dynamic blog functionality
- Implement real contact form submission

## 🔧 Customization

### Colors
Edit `src/app/globals.css` to customize the color scheme.

### Content
Edit individual page files in `src/app/` to update content.

### Components
Modify `src/components/` for header/footer changes.

## 📊 Performance

- **Static Generation**: All pages are pre-rendered
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic by Next.js
- **Bundle Size**: Optimized with Tailwind CSS

## 🐛 Known Issues

None currently. All pages are functional and responsive.

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Dynamic project filtering
- [ ] Team member detail pages
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Internationalization (i18n)
- [ ] Real contact form backend

## 📄 License

This project is created for TetraNeurons Software Company.

## 👥 Team

Built with passion by TetraNeurons - Empowering Businesses with AI-Driven Innovation.

---

**Last Updated**: December 4, 2025
**Status**: ✅ Production Ready
