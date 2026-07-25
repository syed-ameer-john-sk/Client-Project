# Pre-Launch Checklist

Run this in full before any restaurant site project goes live or is handed back to the client for review. Treat every unchecked box as a blocker, not a nice-to-have — these are the details premium-conscious clients check first.

## SEO
- [ ] Unique meta title per page
- [ ] Unique meta description per page
- [ ] `sitemap.xml` generated and submitted
- [ ] `robots.txt` present and not accidentally blocking the whole site
- [ ] Alt text on every content image (not just decorative ones — skip alt on purely decorative images instead of leaving it empty by mistake)
- [ ] One `<h1>` per page; logical `h2`/`h3` nesting under it (no skipped levels)

## Performance
- [ ] All images compressed (no unoptimized originals shipped to production)
- [ ] Lazy loading on below-the-fold images
- [ ] No unused/dead code shipped (leftover template components, unused CSS)
- [ ] Fonts and third-party scripts loaded without blocking first paint

## Responsive / cross-device
- [ ] Full pass on mobile (not just resizing a desktop browser — check on an actual phone-sized viewport)
- [ ] Full pass on tablet
- [ ] Full pass on desktop
- [ ] Nav, forms, and buttons usable at every breakpoint — no overlapping or cut-off elements

## Functional QA
- [ ] Every button works (Reserve, View Menu, Call Now, WhatsApp, Contact Us)
- [ ] Every internal and external link works
- [ ] Google Maps embed(s) load and pin the correct location(s)
- [ ] Contact form actually sends / submits successfully
- [ ] Opening hours match exactly across homepage, contact page, and footer
- [ ] Social icons open in a new tab and point to the correct profiles

## Content QA
- [ ] No spelling mistakes (run a full proofread pass, don't rely on spellcheck alone for a bilingual FR/EN site)
- [ ] Menu prices and descriptions match the client's latest source doc exactly
- [ ] No repeated images across homepage / gallery / menu

## Overall feel
- [ ] Consistent card heights and spacing across every grid/section
- [ ] Hover states present on all clickable elements
- [ ] Looks premium and custom on a fresh look — if it reads as "a template," it's not done
