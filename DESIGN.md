---
name: Deep Space Cyber
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb784'
  on-tertiary: '#4f2500'
  tertiary-container: '#a15100'
  on-tertiary-container: '#ffe0cd'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system channels an advanced developer studio aesthetic rooted in deep space tranquility, precision tooling, and high-velocity workflows. It balances high-density information architecture with refined sensory polish—blending modern minimalism with dark glassmorphic depth.

The interface addresses software architects, systems engineers, and technical founders who demand low-latency, focus-driven tools. The visual environment evokes deep calm, cognitive clarity, and mechanical precision. Visual elements avoid decorative clutter, favoring functional micro-borders, optical glow accents, and tight mathematical alignments.

## Colors

The palette is engineered around deep optical absorption and sharp luminescence:

- **Base Environment**: Midnight Slate (`#090D16`) serves as the foundation, absorbing light and eliminating eye strain during prolonged sessions.
- **Surfaces & Cards**: Obsidian Blue (`#111827`) provides structural framing for content containers, paired with layered elevated tiers (`#0F172A`).
- **Borders & Dividers**: Subdued boundary lines use `#1E293B` at variable opacity (from 40% to 100%) to preserve structure without visual noise.
- **Luminescent Accents**: 
  - **Electric Violet (`#7C3AED`)**: The primary signal for high-leverage triggers, focus outlines, and brand moments.
  - **Neon Cyan (`#06B6D4`)**: The secondary signal used for telemetry highlights, real-time indicators, operational states, and code tokens.
- **Typography & Neutrals**: Headings leverage crisp Silver Slate (`#F8FAFC`), while body and metadata default to Muted Slate (`#94A3B8`). Passive metadata steps down to `#64748B`.

## Typography

Typography prioritizes information density, tabular tracking, and scanning efficiency.

- **Primary Interface (Geist)**: Applied across all UI copy, modal headers, navigation, and body tiers. Tight negative tracking is applied to display weights to retain a compact geometric silhouette.
- **Telemetry & Technical Layer (JetBrains Mono)**: Reserved for micro-badges, status counters, timestamps, keyboard accelerators, and raw source code blocks.
- **Hierarchy Rules**: Ensure a strict 2-tier step down between section titles and metadata tags. Avoid unweighted light fonts; base UI scales default to Medium (`500`) and Regular (`400`).

## Layout & Spacing

This design system uses a technical fluid grid anchored by strict component-level paddings:

- **Grid Architecture**: 
  - Desktop (≥1280px): 12-column dynamic grid with `1.5rem` (`24px`) gutters and a max canvas width of `1600px`.
  - Tablet (768px – 1279px): 8-column layout with `1rem` (`16px`) gutters.
  - Mobile (<768px): 4-column layout with `1rem` outer canvas margins and stacked full-width modules.
- **Rhythm**: Spacing follows a 4px base increment. High-density panels utilize `space-sm` (`8px`) gaps between items, while section separation commands `space-xl` (`32px`). Content padding within technical tables and lists maintains a condensed horizontal rhythm for dense information consumption.

## Elevation & Depth

Spatial layering relies on translucent glass planes, sharp micro-borders, and optical back-glows:

- **Surface Layering**:
  - **Base Canvas**: `#090D16` flat solid.
  - **Level 1 (Panels & Cards)**: Obsidian Blue (`#111827`) filled at 75% opacity over a `16px` backdrop-filter blur.
  - **Level 2 (Modals & Flyouts)**: `#1E293B` filled at 85% opacity over a `24px` backdrop blur.
- **Micro-Borders**: Floating surfaces feature a 1px continuous border of `#1E293B` mixed with an inner top border (inset `0 1px 0 0`) of `rgba(255, 255, 255, 0.08)` to simulate a beveled glass edge catching distant light.
- **Luminescence & Shadows**:
  - Passive elements: `0 4px 20px -2px rgba(0, 0, 0, 0.5)`.
  - Focused / Electric Violet state: `0 0 0 1px #7C3AED, 0 0 24px -4px rgba(124, 58, 237, 0.35)`.
  - Active / Neon Cyan state: `0 0 0 1px #06B6D4, 0 0 20px -4px rgba(6, 182, 212, 0.3)`.

## Shapes

The design system employs a refined Soft shape profile (`roundedness: 1`), conveying engineered precision rather than playful softness.

- **Micro Controls & Inputs**: `4px` (`0.25rem`) radius for compact inputs, dropdown triggers, and status tags.
- **Cards & Modals**: `8px` (`0.5rem`) outer radius with nested controls maintaining a proportional `4px` inner radius.
- **Status Pills & Telemetry Badges**: Full radius (`9999px`) creating strict horizontal capsules that contrast against rectangular card frames.

## Components

### Buttons
- **Primary**: Background in Electric Violet (`#7C3AED`), text in `#FFFFFF`, with a top inset highlight of `rgba(255, 255, 255, 0.2)` and a drop glow of `0 0 16px rgba(124, 58, 237, 0.4)`. Hover transitions to `#6D28D9`.
- **Secondary / Ghost**: Obsidian surface with 1px border in `#1E293B`. Text in `#F8FAFC`. On hover, border shifts to `#334155` with a subtle white highlight gradient.
- **Terminal / Icon Action**: Compact 28x28px squares with subtle `rgba(255,255,255,0.05)` hover fills.

### Cards & Panels
- Framed in Obsidian Blue (`#111827`) with a 1px border (`#1E293B`).
- Cards incorporate top-edge highlight tracing (`rgba(255, 255, 255, 0.05)`).
- Hover states trigger a subtle border transition to `#334155` or an Electric Violet rim (`#7C3AED`) on interactive cards.

### Input Fields & Controls
- Form backgrounds sit in dark Midnight Slate (`#090D16`) inset into Obsidian cards.
- Border is 1px `#1E293B`. Text is Geist 14px in `#F8FAFC`.
- Focus creates a zero-delay transition to a 1px outline in `#7C3AED` with an ambient violet box-glow.

### Pills & Badges
- Constructed with full pill radii (`9999px`) using `JetBrains Mono` at 11px uppercase.
- Neutral variant: `#1E293B` background with `#94A3B8` text.
- Cyan Signal variant: `rgba(6, 182, 212, 0.1)` background, 1px border in `rgba(6, 182, 212, 0.3)`, and `#06B6D4` text with an internal pulsing green/cyan indicator dot.

### Lists & Key-Value Rows
- Dense borderless or hairline-divided rows (`border-b: 1px solid rgba(30, 41, 59, 0.4)`).
- Alternate row hovering illuminates an ultra-faint surface shift (`rgba(255, 255, 255, 0.02)`).

### Command Palette & Developer Popovers
- Deep glassmorphic overlay (`rgba(9, 13, 22, 0.8)` with `20px` blur).
- Fixed-width floating terminal search bar featuring a neon command cursor and JetBrains Mono shortcut badges (`⌘K`).