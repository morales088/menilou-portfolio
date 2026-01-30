# Portfolio Website

A modern, minimal portfolio website built with Next.js 15, App Router, and Tailwind CSS V4.

## Features

- 🎨 Minimal, clean design with smooth microinteractions
- 📱 Mobile-first responsive layout
- ⚡ Built with Next.js 15 and App Router
- 🎭 Tailwind CSS V4 for styling
- ✨ Smooth animations and transitions
- 🌈 Tasteful color palette

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services grid
│   ├── Portfolio.tsx    # Portfolio showcase
│   ├── Technologies.tsx # Tech stack
│   ├── Testimonial.tsx  # Testimonial section
│   ├── Partners.tsx     # Partners/clients
│   ├── AboutMe.tsx      # About section
│   ├── ContactForm.tsx  # Contact forms
│   └── Footer.tsx       # Footer
└── ...
```

## Customization

- Update colors in `tailwind.config.ts`
- Modify content in individual component files
- Adjust spacing and animations in `app/globals.css`

## Build for Production

```bash
npm run build
npm start
```
