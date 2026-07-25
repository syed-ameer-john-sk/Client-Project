---
name: restaurant-website-premium-build
description: Use this skill whenever the Antigravity team is building, redesigning, or doing a QA/launch pass on a restaurant or hospitality client website (e.g. Maison du Curry, Le Gandhi-style multi-location sites). Covers the standard page structure, section-by-section implementation patterns (menu, locations, gallery, reservation, contact, about/timeline, trust, CTAs), the "premium not template" quality bar these clients expect, and the SEO/performance/mobile QA checklists to run before every launch. Trigger this any time a client PRD mentions a restaurant menu, an "our locations" page, a gallery with lightbox, a reservation section, or asks the site to look "premium" or "not like a template" — even if the word "skill" or "restaurant" isn't used explicitly.
---

# Restaurant Website Premium Build

Antigravity builds and maintains websites for restaurant clients. These projects share the same shape: a client (often non-technical but design-conscious) sends a long, informally-written requirements list, and it needs to turn into a site that reads as premium and custom, never templated. This skill captures the recurring page patterns, the quality bar, and the checklists so every project — new build or update — starts from the same solid baseline instead of being re-derived from scratch each time.

## When a new PRD comes in

1. Read the client's requirements email/doc fully before scoping. These are usually unordered and mix content requests (menu items, photos) with structural requests (new pages) and vague quality asks ("make it premium"). Separate the three.
2. Check `references/` in this skill for a project-data file matching the client name (e.g. `maison-du-curry-project-data.md`). If one exists, use it as the source of truth for addresses, phone numbers, hours, and social links instead of re-parsing the original email each time — it's already been cleaned up once.
3. Turn the requirements into numbered tickets (one per implementable unit of work, not one per PRD bullet — group related bullets). Each ticket needs: description, acceptance criteria, priority, dependencies, and what client assets (photos, copy, PDFs) it's blocked on.
4. Flag anything that's a content dependency (client needs to send a photo, a menu PDF, final copy) separately from anything that's pure implementation — content-blocked tickets shouldn't block the tickets that aren't.

## Standard site structure

Unless the client's PRD says otherwise, these clients expect this exact page set and nav order:

`Home → About → Menu → Gallery → Our Locations → Reservation → Contact`

- Nav is fixed/sticky while scrolling.
- "Our Locations" only exists as a separate page when the client has more than one branch/location — otherwise fold that content into About or Contact.
- Every page ends with the same footer: opening hours, social icons, contact shortcuts (phone/WhatsApp/email), and a CTA.

## Section-by-section patterns

### Menu
- Content is data-driven: category → items, each item has name, price, description, optional image.
- Never reuse a food photo that's already used on the homepage or gallery for the same dish if a different shot of it exists — clients notice repetition and it reads as low-effort.
- Prices and descriptions come from the client's own menu PDF/doc — never invent or "clean up" a price.
- UI goal: legible at a glance on mobile (this is usually read one-handed, in a hurry, by someone deciding what to order) — clear category headers, consistent card/row heights, generous line spacing.

### Our Locations (multi-branch clients)
One card per location, in this fixed shape:
- Branch photo
- Branch name
- Full address
- Google Maps button (deep link, opens in new tab)
- Short description (1–2 sentences — what's distinct about this branch: market stall vs. street food counter vs. full restaurant, etc.)

Check the matching `references/<client>-project-data.md` file for this project's actual branch data before inventing placeholder copy.

### Gallery
- Separate page, not a homepage carousel.
- Organize into at least: restaurant/interior, food, kitchen, customer atmosphere.
- Every image opens a lightbox on click (prev/next navigation, esc/click-outside to close).
- Don't duplicate homepage hero images here — gallery should feel like "more," not "the same photos again."

### Homepage
This is the page clients judge "premium" or "template" on. Checklist:
- Hero section with a strong food or ambience image, not a generic stock-feeling banner.
- Generous whitespace/section spacing — cramped sections are the #1 tell of a template.
- Typography: one confident display font for headings, a clean readable body font — never default system fonts.
- Subtle scroll-triggered animations (fade/slide-in on section entry) — subtle, not gimmicky.
- Section order typically: Hero → About teaser → Menu highlights → Trust section → Gallery teaser → Reservation CTA → Locations teaser (if multi-branch) → Footer.

### About + Timeline
- Replace any placeholder/old copy with the client's actual story, verbatim in substance (don't compress out specific facts they gave you — founding year, milestones).
- Render milestones (founding year, each new location/phase) as a visual timeline component, not a paragraph.

### Reservation section
Must include, together, not scattered: phone number, email, opening hours, a "Reserve" button, and a WhatsApp button. This is a conversion section — keep it visually distinct from surrounding content (card, contrasting background, or dedicated section).

### Contact page
Google Map embed (not just a static address), address, phone, WhatsApp, email, and a working contact form. The map should be interactive/embedded, not a screenshot.

### Opening hours
One data source, rendered in three places: homepage, contact page, footer. Keep exactly in sync — this is the single most common launch-day inconsistency bug (someone updates hours in one place and not the other two).

### Social icons
Instagram/TikTok (or whatever the client uses) as icons in: header, footer, and contact page. All links `target="_blank" rel="noopener noreferrer"`.

### Trust section
A row/grid of short trust badges (e.g. "Since 2014," "Authentic Cuisine," "Vegetarian Options," "Family Friendly," "Dine-in / Takeaway"). Pull the actual claims from the client — don't genericize them.

### CTA buttons
Standard set, repeated at natural decision points throughout the page (not just once at the top): Reserve Table, View Menu, Call Now, WhatsApp, Contact Us. Every CTA should be one tap from intent to action — `tel:`, `https://wa.me/`, or an anchor to the reservation form, never a dead link to a page that just repeats the phone number.

## The "premium, not template" bar

Clients who explicitly ask for this ("don't make it look basic," "better than [competitor]") are evaluating against these tells specifically:
- Consistent card heights and alignment across a grid — mismatched card heights is the single most common template giveaway.
- Real spacing rhythm (consistent vertical rhythm between sections), not cramped or inconsistent gaps.
- Hover/interaction states on every clickable element, not just links.
- No stock-feeling icon packs used inconsistently — pick one icon set and stick to it.
- Fonts pair intentionally (a display font + a body font), never left at framework defaults.
- Every image is compressed/optimized and lazy-loaded, but doesn't look compressed (no visible artifacts).

## Before launch

Run through `references/launch-checklist.md` — it covers SEO, performance, mobile/tablet/desktop responsiveness, and final QA in one pass. Don't treat these as separate tickets to skip if time is short; they're where premium clients notice problems first.

## Project data

Client-specific facts (addresses, phone numbers, hours, socials, asset notes) belong in `references/<client-slug>-project-data.md`, not in this file — keep this file about the reusable pattern, not any one client's details, so it stays useful across projects.
