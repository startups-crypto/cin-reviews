# WordPress to Next.js Migration Context

Last audited: 2026-06-01

## Purpose

This file is the persistent handoff document for moving a reduced version of the
CinCin WordPress site into the Next.js project. Use it as the first reference in
each follow-up chat. Update the checklist after completing a slice.

## Requested Scope

Build one SEO-oriented multilingual landing page in Next.js.

Transfer:

- Header: logo, language switcher, and CTA button only.
- Content: the page shell and hero section based on `page-white-label.php`.
- Footer: only the large footer logo.
- Fonts and only the styles needed by the transferred markup.
- Only JavaScript required by the reduced page.
- Preserve the visual character of the source site while keeping the result
  deliberately small and ready for text content to be added later.

Do not transfer:

- Main navigation.
- Mobile navigation.
- Google Tag Manager.
- Meta Pixel.
- WordPress-only code, plugins, admin behavior, or unused page sections.
- Unused JavaScript for sliders, FAQ accordions, and decorative animations.

## Audited Projects

### Next.js target

Path: `C:/next-js-projects/chin-chin-seo`

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript
- App Router
- Current state: default `create-next-app` page and styles only
- Existing unrelated untracked file: `chin-chin-seo.code-workspace`

Important local Next.js docs already reviewed:

- `node_modules/next/dist/docs/01-app/02-guides/internationalization.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`

Next.js 16 note: use `proxy.ts`, not the deprecated `middleware.ts` convention.

### WordPress source

Path: `C:/OpenServer/domains/chin-chin`

Theme path: `wp-content/themes/chin-chin`

Primary source files:

- `templates/page-white-label.php`
- `template-parts/header/head-part.php`
- `template-parts/header/header-part.php`
- `template-parts/header/menu-section.php`
- `footer.php`
- `functions.php`
- `core/constants.php`
- `core/translations/*.php`
- `assets/scss/global.scss`
- `assets/scss/global-full.scss`
- `assets/scss/core/variables.scss`
- `assets/scss/core/typography.scss`
- `assets/scss/core/typography-full.scss`
- `assets/scss/core/buttons.scss`
- `assets/scss/core/buttons-full.scss`
- `assets/scss/core/header.scss`
- `assets/scss/core/header-full.scss`
- `assets/scss/core/footer.scss`
- `assets/scss/core/footer-full.scss`
- `assets/scss/sections/hero.scss`
- `assets/scss/sections/hero-full.scss`
- `assets/scss/sections/white-label-page-hero.scss`
- `assets/scss/sections/white-label-page-hero-full.scss`
- `assets/js/modules/header.js`
- `assets/js/white-label.js`

Compiled WordPress CSS:

- `dist/css/page-white-label.css`
- `dist/css/page-white-label-full.css`

## Findings

### WordPress page structure

`templates/page-white-label.php` contains:

1. Hero section.
2. `how-it-works`.
3. Crypto wallet.
4. Web wallet.
5. OTC exchange.
6. Solutions.
7. ROI.
8. General info.
9. Benefits.
10. Solution-for.
11. Another ROI block.
12. Coming soon.

Only the outer `<main>` shell and item 1 are in the requested content scope.

Hero markup contains:

- Decorative background layers.
- Optional H1.
- `White-Label-hero.svg`.
- Optional subtitle.
- Optional four-item feature list with inline SVG icons.
- Optional CTA button.

For the initial skeleton slice, keep the semantic hero structure and image.
The page should remain intentionally content-light until final copy is added.
Use minimal explicit placeholders only where required to preserve semantic HTML,
layout, or SEO validation. Do not invent marketing copy.

### Header reduction

The WordPress header currently contains:

- Mobile menu open button.
- Logo.
- Desktop main navigation.
- Language dropdown.
- CTA button.
- A separate full-screen mobile menu section.

The reduced Next.js header should contain:

- Logo visible on all screen sizes.
- Language dropdown.
- CTA button.

Do not port the hamburger, desktop navigation, or `menu-section.php`.

### Footer reduction

The WordPress footer contains menus, copyright, socials, decorations, and the
large `CinCin.svg` logo. The reduced Next.js footer should render only the large
logo. Decide during the footer slice whether its surrounding decorative
backgrounds remain part of the desired visual result.

### Languages

WordPress default language is `en`.

Translation files exist for:

- `en`
- `ua`
- `ru`
- `es`
- `pt`
- `de`

The active Polylang set was verified from the local WordPress database during
Phase 2. Enabled locales:

- `en`
- `ua`
- `ru`

Translation files for `es`, `pt`, and `de` exist in the theme but are not
enabled in Polylang, so they are excluded from the Next.js dictionaries and
locale routing.

Important mapping:

- Public WordPress locale slug: `ua`
- HTML `lang` value: `uk`

Preserve existing public URLs unless requirements change:

- English canonical page: `/`
- Localized pages: `/{locale}/`

### Fonts

WordPress preloads and defines five local TTF files:

- `Inter_18pt-Regular.ttf`
- `Inter_18pt-Medium.ttf`
- `Inter_18pt-SemiBold.ttf`
- `Inter_18pt-Bold.ttf`
- `Alkatra-Bold.ttf`

For the reduced page, Inter regular, medium, semibold, and bold are expected to
be required. Alkatra appears in styles for sections outside the current scope;
verify usage before copying it.

Use `next/font/local` rather than copying WordPress `<style>@font-face` markup.
Prefer a reduced font payload if visual testing confirms that the variable Inter
font can replace the four static files without changing the intended result.

### JavaScript

Do not copy `dist/js/white-label.js` into Next.js. It bundles Swiper and
initializes sections excluded from the new page:

- Firefly animations.
- Solutions slider.
- FAQ accordion.
- WordPress mobile menu behavior.

The reduced page needs a small client component only for language dropdown
open/close behavior. Preserve query parameters such as `start` when switching
languages if that remains a product requirement.

### SEO

SEO is part of the implementation, not a final polish pass.

Required baseline:

- Semantic HTML with one H1 placeholder until final copy is added.
- Real crawlable localized URLs.
- Correct `<html lang>` per locale, including `ua -> uk`.
- Localized title and description.
- Canonical URL without tracking query parameters.
- `alternates.languages` hreflang entries for every enabled locale.
- Consider `x-default` pointing to `/`.
- Open Graph and Twitter metadata.
- Favicon and icon migration.
- `app/sitemap.ts` with localized alternates.
- `app/robots.ts` referencing the sitemap.
- Useful `alt` text for meaningful images.
- No GTM scripts or GTM noscript iframe.
- No Meta Pixel script or noscript image.
- Verify production output with view-source and crawler-oriented checks.

The WordPress head contains Meta Pixel, but it is explicitly outside the
migration scope.

The source WordPress `robots.txt` is WordPress-specific and should not be copied
verbatim. Generate a minimal Next.js robots file instead.

## Proposed Next.js Architecture

Recommended structure:

```text
app/
  [lang]/
    dictionaries/
      de.json
      en.json
      es.json
      pt.json
      ru.json
      ua.json
    dictionaries.ts
    layout.tsx
    page.tsx
  robots.ts
  sitemap.ts
components/
  footer/
    FooterLogo.tsx
  header/
    Header.tsx
    LanguageSwitcher.tsx
  hero/
    WhiteLabelHero.tsx
lib/
  i18n.ts
  site.ts
proxy.ts
public/
  fonts/
  images/
```

Routing recommendation:

- Keep all rendered locale pages under `app/[lang]`.
- Use `proxy.ts` so public `/` internally resolves to `/en` while preserving the
  English canonical URL `/`.
- Keep non-English public URLs as `/{locale}/`.
- Validate the exact redirect/rewrite behavior with the deployment target.

Why: the localized root layout can render the correct `<html lang>`, locale
pages can be statically generated, and SEO URLs remain compatible with the
WordPress site.

If the deployment must use static export only, revisit routing before coding:
Next.js Proxy is not supported by static export.

## Initial Asset Inventory

Copy only assets proven necessary for each slice.

Hero assets:

- `dist/images/White-Label-hero.svg`
- `dist/images/template-bgs/hero-top-center-bg.svg`
- `dist/images/template-bgs/hero-left-top-bg-2.svg`
- `dist/images/template-bgs/hero-ellipse-clear-full.svg`
- `dist/images/template-bgs/hero-skeleton-bg.svg`
- `dist/images/template-bgs/hero-left-center-bg-clear.svg`
- `dist/images/template-bgs/hero-right-center-bg-clear.svg`
- `dist/images/template-bgs/hero-bottom-center-bg-clear.svg`

Header and CTA assets:

- Prefer extracting the existing inline header logo SVG into a standalone file.
- `dist/images/main-button.svg`
- `dist/images/main-button-hover.svg`

Footer asset:

- `dist/images/CinCin.svg`

Possible footer decoration assets, only if retained:

- `dist/images/footer-bottom-left-decoration-m.svg`
- `dist/images/footer-bottom-right-decoration-m.svg`
- `dist/images/footer-skeleton-decoration-m.svg`
- `dist/images/footer-bottom-left-decoration.svg`
- `dist/images/footer-bottom-right-decoration.svg`
- `dist/images/footer-skeleton-decoration.svg`

Icon assets:

- Copy the favicon set from `dist/images/favicon/`.
- Fix or replace the old `manifest.json`: it references stale `/w-content/...`
  paths and should not be reused as-is.

## Detailed Migration Plan

### Phase 0: Confirm contracts

- [ ] Confirm production hostname for canonical URLs.
- [ ] Confirm deployment mode: Node/server deployment or static export.
- [x] Query the running local WordPress database when content extraction begins.
- [x] Confirm enabled Polylang locales; do not assume every translation file is active.
- [ ] Confirm whether localized public URLs must exactly match WordPress.
- [ ] Confirm CTA label and URL source for each locale.
- [ ] Confirm whether `start` query parameter propagation is still required.
- [ ] Confirm whether footer background decorations stay when only footer-logo remains.
- [ ] Define the minimum placeholders required before final text content is added.

### Phase 1: Establish the SEO-aware Next.js shell

- [x] Remove default `create-next-app` page styles and demo markup.
- [x] Add `lib/site.ts` for hostname and shared SEO constants.
- [x] Add `lib/i18n.ts` for locale slugs, HTML lang mapping, default locale, and URL helpers.
- [x] Add `proxy.ts` for root English rewrite and locale routing.
- [x] Add `app/[lang]/layout.tsx`.
- [x] Add `generateStaticParams()` for enabled locales.
- [x] Reject unsupported locale segments with `notFound()`.
- [x] Render the correct `<html lang>` value, mapping `ua` to `uk`.
- [x] Add a minimal `app/[lang]/page.tsx` shell.
- [x] Run lint and production build.
- [x] Verify `/`, `/ua/`, and one unsupported locale manually.

### Phase 2: Add dictionaries and localized metadata

- [x] Create a server-only dictionary loader.
- [x] Add dictionary files only for confirmed enabled locales.
- [x] Define hero placeholder keys, header CTA keys, and metadata keys.
- [x] Add localized title and description.
- [x] Add canonical URL generation that excludes query parameters.
- [x] Add `alternates.languages` hreflang links.
- [x] Add Open Graph and Twitter metadata.
- [x] Add `x-default` if agreed.
- [x] Inspect rendered `<head>` for every locale.

### Phase 3: Move fonts and global design tokens

- [ ] Copy only required font files.
- [ ] Configure fonts with `next/font/local`.
- [ ] Replace Geist from the starter layout.
- [ ] Port required color, spacing, breakpoint, reset, and typography rules.
- [ ] Avoid copying the full compiled WordPress CSS bundle.
- [ ] Verify Cyrillic rendering for `ua` and `ru`.
- [ ] Compare font loading and layout shift in browser tools.

### Phase 4: Move the reduced header

- [ ] Extract the WordPress inline logo SVG to a reusable asset or component.
- [ ] Build `Header.tsx` with logo, language switcher, and CTA only.
- [ ] Make logo visible at mobile widths.
- [ ] Build `LanguageSwitcher.tsx` as a small client component.
- [ ] Render links to canonical locale paths.
- [ ] Preserve approved query parameters during locale switches if required.
- [ ] Add keyboard interaction, focus behavior, and `aria-expanded`.
- [ ] Close the dropdown after navigation and on outside click or Escape.
- [ ] Port only required header, dropdown, and button styles.
- [ ] Verify header at mobile, tablet, and desktop widths.

### Phase 5: Move content shell and hero skeleton

- [ ] Build `WhiteLabelHero.tsx`.
- [ ] Add `<main>` and `<section>` semantic structure.
- [ ] Copy the hero image and decorative background assets.
- [ ] Port hero layout styles for mobile and desktop.
- [ ] Decide which empty content elements remain while content is intentionally absent.
- [ ] Keep one explicit H1 placeholder until final localized H1 copy is added.
- [ ] Add meaningful image alt text.
- [ ] Do not port excluded lower sections.
- [ ] Verify visual layout and responsive breakpoints.

### Phase 6: Move footer-logo only

- [ ] Build `FooterLogo.tsx`.
- [ ] Copy `CinCin.svg`.
- [ ] Port only logo layout styles.
- [ ] Add decorative footer wrappers only if confirmed.
- [ ] Verify spacing after the hero-only page.

### Phase 7: Add only required JavaScript

- [ ] Confirm the language switcher is the only interactive feature.
- [ ] Do not add Swiper.
- [ ] Do not add accordion logic.
- [ ] Do not add firefly animation logic.
- [ ] Do not add WordPress mobile-menu logic.
- [ ] Check the client bundle for accidental heavy dependencies.

### Phase 8: Add SEO support files and icons

- [ ] Move favicon assets or replace them with a cleaned minimal set.
- [ ] Add valid manifest metadata only if a web manifest is needed.
- [ ] Add `app/robots.ts`.
- [ ] Add `app/sitemap.ts` with localized URLs and alternates.
- [ ] Add static or generated OG image support.
- [ ] Confirm no GTM code exists in generated HTML.
- [ ] Confirm no Meta Pixel code exists in generated HTML.

### Phase 9: Verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Test all locale URLs.
- [ ] Test unsupported locale handling.
- [ ] Test language switching with and without approved query parameters.
- [ ] Inspect generated HTML for semantic structure and one H1.
- [ ] Inspect canonical, hreflang, robots, sitemap, OG, and Twitter output.
- [ ] Check mobile and desktop screenshots.
- [ ] Run Lighthouse or equivalent SEO and performance checks.
- [ ] Check that only required assets and client JavaScript ship.

## Suggested Chat Slices

Use one slice per follow-up chat:

1. Implement Phase 1 only.
2. Implement Phase 2 only.
3. Implement Phase 3 only.
4. Implement Phase 4 only.
5. Implement Phase 5 only.
6. Implement Phase 6 only.
7. Implement Phases 7 and 8.
8. Run Phase 9 and fix verification issues.

Start each chat with:

```text
Read docs/wordpress-to-next-migration.md and implement Phase N only.
Update the checklist in that file when done.
```

## Status

- [x] WordPress source audited.
- [x] Next.js starter audited.
- [x] Next.js 16 local documentation reviewed.
- [x] Context7 Next.js documentation checked.
- [x] Migration plan written.
- [x] Meta Pixel explicitly excluded from migration scope.
- [x] Local WordPress database reported as running for Phase 0 verification.
- [x] Implementation started.
