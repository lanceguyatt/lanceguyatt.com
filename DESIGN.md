---
version: alpha
name: Workbench
description: Amiga Workbench theme for lanceguyatt.com
colors:
  background: '#FFFFFF'
  foreground: '#000000'
  border: '{colors.foreground}'
  primary: '#6080B0'
  on-primary: '{colors.foreground}'
  secondary: '#A0A0A0'
  on-secondary: '{colors.foreground}'
  kickstart-background: '#441044'
  kickstart-foreground: '#E0A080'
typography:
  body:
    fontFamily: Topaz
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 18px
  title:
    fontFamily: Topaz
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.125
rounded:
  none: 0px
spacing:
  unit: 4px
  titlebar: 22px
  toasty: 12.5rem
components:
  window:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.none}'
    padding: 8px
  window-titlebar:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    height: 18px
  action:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-secondary}'
    rounded: '{rounded.none}'
    padding: '0 8px'
    height: 24px
  action-active:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
---

# Workbench

## Overview

A faithful nod to the Amiga Workbench 1.x/2.x desktop. Everything is flat, pixel-sharp and bitmap-like: one font (Topaz), a four-colour palette, bevelled edges drawn with SVG border images, and no rounding, gradients or soft shadows. Content lives inside windows with Close, Zoom and Depth gadgets; navigation is a desktop of disk, drawer, drive and file icons. Errors are a Guru Meditation; the boot screen is Kickstart.

## Colors

Use the token (Tailwind utility `bg-primary`, `text-foreground` and so on), never the hex literal. Tokens are defined in `src/styles/app.css`.

- **background (#FFFFFF)**: the desktop
- **foreground (#000000)**: text, and the default for `border` and every `*-foreground` token
- **primary (#6080B0)**: Workbench blue; window title bars, focus and pressed states
- **secondary (#A0A0A0)**: Workbench grey; window bodies and buttons
- **kickstart-background (#441044)** and **kickstart-foreground (#E0A080)**: used only by the Kickstart theme (`:root[data-theme='kickstart']`), which remaps background, foreground, primary and secondary

## Typography

Topaz is the only typeface, loaded locally through Astro's `fonts` API as `--font-topaz` and mapped to both `font-sans` and `font-mono`. Use a single weight (400). Body line height is a fixed 18px to keep the bitmap rhythm; `leading-tighter` (1.125) is for tight headings. Don't add bold, italic or a second family.

## Layout

Use the Tailwind 4px spacing scale. Custom spacing:

- `titlebar`: 22px (`h-titlebar`), the height of a window title bar including its border
- `toasty`: 12.5rem, for the easter-egg image

## Elevation & Depth

Depth comes only from bevels: light top-left and dark bottom-right edges drawn with `border-image` utilities (`border-window`, `border-action`, `border-display`, `border-dropbox`). No `box-shadow`, blur or transparency.

## Shapes

Square corners everywhere (`rounded.none`). Icons are pixel SVGs in `src/icons/` and `public/images/`.

## Components

Gadgets live in `src/gadgets/` and use `tailwind-variants`.

### window

`Window.astro`: `border-window` frame, `secondary` body with 8px padding, `primary` title bar holding Close, the title, optional disk usage (`full`, `free`) and Zoom and Depth gadgets.

### action

`Action.astro`: a button or link with the `border-action` bevel, `secondary` fill, 24px high, 8px horizontal padding; turns `primary` when pressed or focused. The `ghosted` intent is disabled.

### requester

`Requester.astro`: a modal window for confirmations, built from Window and Action.

### Other gadgets

Close, Depth, Zoom, Cycle, Radio, Text, Display and IconDropBox.

## Do's and Don'ts

- Do keep to the four Workbench colours; the Kickstart palette is for the Kickstart theme only
- Do use the bevel `border-*` utilities for depth
- Don't round corners, add shadows or use gradients
- Don't use any font other than Topaz, or weights other than 400
- Don't use arbitrary hex values in components; add a token to `src/styles/app.css` instead
