# Design Brief — Broadway Performer Showcase

## Overview
A one-page static showcase for a Broadway performer and recording artist. The design evokes the warmth of a theater interior: dim house lights, a single amber spotlight, and the hush before the curtain rises.

## Palette

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| background | #1a1614 | 0.18 0.01 40 | Page background, deepest layer |
| surface | #2a2420 | 0.22 0.015 45 | Cards, nav, elevated surfaces |
| primary | #d4a853 | 0.72 0.14 85 | CTAs, accents, spotlight gold |
| secondary | #c97b6d | 0.60 0.10 30 | Highlights, hover states, dusty coral |
| text | #f5f0eb | 0.96 0.01 70 | Primary text, warm off-white |
| muted | #a89f98 | 0.65 0.03 60 | Secondary text, captions |

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display | Instrument Serif | 400 italic | Hero name, section titles, dramatic moments |
| Body | Satoshi | 300–400 | Paragraphs, descriptions, UI text |
| Mono | JetBrains Mono | 400 | Labels, metadata, technical accents |

## Zones

| Zone | Background | Treatment |
|------|------------|-----------|
| Header / Nav | surface | Sticky, border-b, shadow-subtle |
| Hero | background | Full viewport, gradient overlay on image, gold accent text |
| About | background | Centered text block, generous whitespace |
| Discography | surface | Card grid, album art with hover lift |
| Gallery | background | Photo grid, lightbox on click |
| News | surface | Dated entries, timeline feel |
| Contact | background | Form with gold-accented inputs |
| Footer | surface | Branding, social links |

## Motion

- Entrance: `fade-in-up` for sections, `fade-in-left` / `fade-in-right` for alternating layouts
- Hover: cards lift with `shadow-elevated`, images scale 1.02
- Hero: subtle `float` on decorative elements, `spotlight-pulse` on accent line
- Smooth scroll for all anchor navigation

## Aesthetic
Theatrical, warm, intimate. Like standing in the wings of a Broadway house. No cold greys — everything carries warmth. Gold accents feel like stage lighting, not bling.
