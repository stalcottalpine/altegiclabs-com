# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Altegic Labs, an enterprise AI consulting company. Built with React + TypeScript + Vite, deployed to Cloudflare Pages.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

## Architecture

- **Single-page React app**: All content in `src/App.tsx`
- **Static output**: No backend, purely static site for Cloudflare Pages
- **CSS**: Global styles in `src/index.css` (vanilla CSS, no framework)

## Project Structure

```
src/
├── App.tsx          # Main component (full page content)
├── main.tsx         # Entry point
├── index.css        # All styles (extracted from original HTML)
├── vite-env.d.ts    # Vite type definitions
└── assets/
    └── f1-hero.jpg  # Hero background image
public/
└── _redirects       # Cloudflare Pages SPA routing
```

## Design System

CSS custom properties in `:root`:
- Colors: `--carbon` (dark bg), `--steel` (light text), `--teal` (accent #2FC4E8)
- Typography: Cormorant (serif headlines), Outfit (body), DM Mono (monospace/UI)
- Borders/spacing: `--rule` and `--rule-strong` for consistent dividers

## Cloudflare Pages Deployment

Build settings:
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18+

The `public/_redirects` file handles SPA routing.
