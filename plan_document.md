# Product Requirements Document (PRD)

## TECHNOVATION — Digital Agency & Studio Website

---

| Metadata             | Details                                           |
| :------------------- | :------------------------------------------------ |
| **Document Version** | 1.0.0                                             |
| **Status**           | Approved / Ready for Development                  |
| **Project Name**     | TECHNOVATION Agency Website                       |
| **Target Launch**    | Q3 2026                                           |
| **Tech Stack**       | Next.js (App Router), Tailwind CSS v4, TypeScript |
| **Primary Authors**  | Co-Founders, TECHNOVATION                         |

---

## 1. Executive Summary & Business Objectives

### 1.1 Project Summary

TECHNOVATION is a two-person digital product studio specializing in full-stack web development, dynamic web applications, and data analytics dashboards. The primary goal of this web application is to establish a high-end visual identity, showcase client testimonials and case studies, and convert prospective high-value leads into active client engagements.

### 1.2 Core Business Objectives

- **Credibility & Trust:** Present a modern, premium aesthetic that positions the two-person team as an elite, high-capability studio rather than solo freelancers.
- **Lead Generation:** Drive prospective clients toward scheduling discovery calls or submitting direct project inquiries via optimized Call-to-Actions (CTAs).
- **Work Showcase:** Highlight past projects through structured, high-impact case studies emphasizing problem, solution, tech stack, and measurable business outcomes.
- **Performance & SEO:** Achieve near-perfect Lighthouse performance scores and top-tier SEO indexing for full-stack engineering search terms.

---

## 2. Target Audience & Client Personas

1. **Startup Founders & Product Owners:** Looking for a trusted technical partner to build an MVP or rebuild an existing web application with modern tech.
2. **SMB Directors & Business Owners:** Seeking to automate operations, construct internal data dashboards, or refresh outdated web architecture.
3. **Agencies & Enterprise Leads:** Needing specialized full-stack engineering sub-contractors or technical consultants for complex React/Next.js builds.

---

## 3. User Stories

### 3.1 Prospective Client Experience

- _As a prospective client,_ I want to immediately understand what TECHNOVATION builds within 3 seconds of entering the page.
- _As a prospective client,_ I want to view detailed case studies showing technical capabilities and real metrics so I can evaluate fit for my project.
- _As a prospective client,_ I want to easily submit my project scope and budget range through an intuitive contact form so I can get a quick consultation.

### 3.2 Founder / Developer Experience (Site Maintenance)

- _As a site administrator,_ I want to add new portfolio projects easily by editing a single structured TypeScript or MDX file without touching layout code.
- _As a site administrator,_ I want form submissions sent directly to my team email address via an API endpoint without needing complex database management.

---

## 4. UI/UX & Brand Design Specifications

### 4.1 Aesthetic Concept

- **Theme:** Deep Space / Cyber Dark Theme (_Linear modern aesthetic_).
- **Base Background:** `#090D16` (Midnight Slate).
- **Surface / Cards:** `#111827` (Obsidian Blue) with subtle 1px border (`#1E293B`).
- **Primary Accents:** Electric Violet (`#7C3AED`) & Neon Cyan (`#06B6D4`).
- **Text Hierarchy:** Headings in Crisp Silver (`#F8FAFC`), Body in Muted Slate (`#94A3B8`).

### 4.2 Interactive Elements & Design System

- **Glassmorphic Navigation:** `backdrop-blur-md bg-slate-900/65` header pinned to top.
- **Ambient Mesh Glows:** Radial background gradients with low opacity (`blur-3xl opacity-20`) behind the Hero section and project showcase cards.
- **Hover FX:** Project cards highlight with glowing border transitions (`hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]`).

---

## 5. System Architecture & Section Requirements

### 5.1 Page Layout Architecture

```text
[ Sticky Navigation Header ]
          │
  ├── 1. Hero Section (Headline, Tagline, Primary CTAs, Metrics)
  ├── 2. Client & Technology Ticker (Social Proof)
  ├── 3. Services & Capabilities (4-Grid Breakdown)
  ├── 4. Featured Case Studies (Interactive Cards & Dynamic Routes)
  ├── 5. Endorsements & Client Testimonials
  ├── 6. 4-Step Engineering Process (Discovery → Launch)
  ├── 7. Founder Bios & Team Spotlight
  └── 8. Project Inquiry Contact Form & Direct Calendar Booking
          │
[ Footer (Quick Links, Socials, Legal) ]
```

### 5.2 Key Functional Components

#### A. Hero Section (`components/Hero.tsx`)

- Dynamic animated gradient headline.
- Dual CTA: `View Projects` (smooth anchor link) and `Get in Touch` (opens inquiry modal/form).
- Key metric pills: _"100% On-Time Delivery"_, _"Next.js & React Specialists"_.

#### B. Dynamic Work & Case Studies (`app/work/[slug]/page.tsx`)

- Driven by static data array in `content/projects.ts` for fast updates.
- Metadata fields: `title`, `client`, `category`, `description`, `tags`, `image`, `impact`, `link`.
- Individual case study pages rendered dynamically using Next.js `generateStaticParams`.

#### C. Contact Form API Endpoint (`app/api/contact/route.ts`)

- Fields: Name, Email, Budget Range (`<$5k`, `$5k-$10k`, `$10k+`), Service Type, Project Description.
- Backend processing: Validates input server-side, dispatches automated email alert to founders via transactional provider (e.g., Resend / SendGrid), returns JSON status response.

---

## 6. Non-Functional Requirements & Performance Standards

| Metric / Category          | Requirement                                                                                                             |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Lighthouse Performance** | $\ge 95$ across Performance, Accessibility, Best Practices, and SEO.                                                    |
| **Page Load Speed**        | First Contentful Paint (FCP) under 1.0s; Largest Contentful Paint (LCP) under 1.8s.                                     |
| **Responsiveness**         | Mobile-first development covering breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).                |
| **SEO Optimization**       | Comprehensive OpenGraph image meta tags, Twitter card tags, canonical URLs, and structured JSON-LD organization markup. |
| **Accessibility (a11y)**   | WCAG 2.1 AA compliance with high-contrast text and keyboard nav targets.                                                |

---

## 7. Product Roadmap

```
Phase 1 (MVP - Launch) ──► Phase 2 (Enhancements) ──► Phase 3 (Scaling)
  • Single-page layout       • Headless CMS (Sanity)   • Client Portal
  • Local JSON projects      • Interactive Estimator   • Client Retainer Billing
  • Static API contact form  • Blog / Insights Section • Automated Proposals
```

### Phase 1: MVP (Current Release)

- Next.js App Router core page layout.
- Local TypeScript content file for zero-latency project loading.
- Contact form with API email routing.
- Full dark-mode UI with custom Tailwind CSS global styles.

### Phase 2: Post-Launch

- Integration of **Sanity.io** or **Contentful** headless CMS for visual content edits without redeploying code.
- Interactive "Project Budget Estimator" component for automated client scoping.
- Technical Insights & Engineering Blog (`/blog`).

### Phase 3: Long-Term Scaling

- Authenticated Client Portal (`/portal`) for live project progress tracking, milestone updates, and invoice payments.

---
