# Personal Brand Website

## Project Overview

This is a personal brand website showcasing professional experience, skills, and creative work. The website features modern UI components, interactive elements, and a unique CDJ-inspired timeline animation that reflects the intersection of technology and music.

## Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS
- **UI Components**: Custom components with Radix UI primitives

## File Structure Standards

### File Extensions
- **React Components**: `.tsx` for all React components
- **TypeScript Utilities**: `.ts` for utility functions and helpers
- **Styles**: `.css` for component styles

### Component Organization
- Components should be organized in the `src/components` directory
- Each major component should have its own folder with:
  - `index.tsx`: Main component file
  - `styles.css`: Component-specific styles (if needed)
  - Additional sub-components as needed

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **CSS Classes**: kebab-case (e.g., `hero-container`)

## Implementation Timeline

### Phase 1: Project Setup and Core Components (Completed)
- ✅ Initialize React + TypeScript project with Vite
- ✅ Set up Tailwind CSS
- ✅ Create basic UI components library

### Phase 2: Main Sections (In Progress)
- ✅ Hero Section
- ✅ About Section with timeline
- ✅ CDJ Animation for Journey Section
- ⬜ Projects/Portfolio Section
- ⬜ Skills/Technologies Section
- ⬜ Contact Section

### Phase 3: Enhancements
- ⬜ Responsive Design Optimizations
- ⬜ Performance Optimizations
- ⬜ SEO Implementation
- ⬜ Analytics Integration

### Phase 4: Deployment
- ⬜ Final Testing
- ⬜ Production Build
- ⬜ Deployment to Hosting Platform

## Component Conversion Plan

✅ The following components have been converted from JSX to TSX with proper folder structure:

1. `AboutSection.jsx` → `components/AboutSection/index.tsx`
2. `CDJSection.jsx` → `components/CDJSection/index.tsx`
3. `Hero.jsx` → `components/Hero/index.tsx`
4. `App.jsx` → `App/index.tsx`

## Style Guide

### Colors
- Primary: `#FF9500` (brand-orange)
- Background: `#121212` (brand-dark)
- Text: `#F5F5F5` (brand-light-gray)
- Secondary: `#333333` (brand-medium-gray)

### Typography
- Headings: Inter, sans-serif
- Body: Inter, sans-serif
- Code/Technical: Fira Code, monospace

## Best Practices

1. Use TypeScript interfaces for component props
2. Keep components focused on a single responsibility
3. Use CSS modules or component-specific CSS files
4. Follow accessibility best practices
5. Write meaningful commit messages

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Notes

- The CDJ animation in the Journey section is designed to rotate as the user scrolls, creating an interactive experience that ties together the music and technology themes.
- The website uses a dark theme with orange accents to create a modern, tech-focused aesthetic.
