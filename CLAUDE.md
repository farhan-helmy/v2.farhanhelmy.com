# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint on the codebase
- `npm run lint:fix` - Run ESLint and automatically fix issues

### Package Management
This project uses npm with pnpm-lock.yaml and bun.lockb present. Use npm for consistency with the package.json scripts.

## Architecture Overview

### Core Technology Stack
- **Next.js 14** with React 18 and TypeScript
- **Nyxb UI** component library (custom design system)
- **TailwindCSS** for styling with custom theme configuration
- **Framer Motion** for animations
- **next-themes** for dark/light mode support

### Project Structure
```
app/                    # Next.js 14 App Router
├── layout.tsx         # Root layout with ThemeProvider and global styles
├── page.tsx           # Homepage
└── blog/              # Blog section
    ├── page.tsx       # Blog listing page
    └── [slug]/        # Dynamic blog post pages

components/            # Reusable UI components
├── ui/               # Base UI components (shadcn/ui style)
├── navbar.tsx        # Navigation component
├── theme-provider.tsx # Theme context provider
└── *.tsx             # Feature-specific components

data/                 # Data layer
├── resume.tsx        # Main configuration file - contains all site data
└── blog.ts           # Blog post utilities

content/              # MDX blog posts
lib/                  # Utilities
styles/               # Global CSS
public/               # Static assets
```

### Key Configuration Files
- `data/resume.tsx` - **Primary configuration file** containing all site data (personal info, work experience, projects, navigation, etc.)
- `tailwind.config.ts` - Extensive custom theme with CSS variables for theming
- `eslint.config.mjs` - Uses @nyxb/eslint-config with React and Tailwind support
- `next.config.mjs` - Basic Next.js configuration with React strict mode

### Styling System
- Uses CSS variables defined in `styles/globals.css` for theming
- Custom Tailwind configuration with extended colors, animations, and utilities
- `ny()` utility function from `lib/utils.ts` for conditional class names (similar to `cn()`)
- Default theme is dark mode (`defaultTheme="dark"` in layout.tsx)

### Content Management
- Blog posts are stored as MDX files in the `content/` directory
- Blog functionality handled by `data/blog.ts` with frontmatter parsing
- Personal/professional data centralized in `data/resume.tsx`

### Component Architecture
- Uses shadcn/ui-style component structure in `components/ui/`
- Radix UI primitives for accessible base components
- Custom animations with Framer Motion (BlurFade, etc.)
- Responsive design with mobile-first approach

### Development Notes
- The site is a portfolio/personal website template from Nyxb UI
- Main content is driven by the `DATA` object in `data/resume.tsx`
- Uses TypeScript throughout with strict type checking
- ESLint configuration includes React, Tailwind, and formatting rules