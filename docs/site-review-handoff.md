# Site review implementation — September 29, 2026

Local changes only. No commit, push, or deployment was made. Career and editorial claims were preserved or changed using the supplied copy; they have not been independently verified.

## Visitor improvements and files

| Benefit | Files | Change |
| --- | --- | --- |
| Sharing and article metadata | `src/layouts/BaseLayout.astro`, `src/lib/site.js`, `src/pages/writing/[slug].astro` | Absolute production URLs, PNG metadata and alt text, publication metadata, BlogPosting data, and shared Person/profile identifiers. No modification dates were invented. |
| Consistent share artwork | `public/social/kevin-mazur.png`, `scripts/generate-social-image.mjs` | 1200 × 630 composition using the existing strategy path illustration, name, and existing descriptor. Regenerate with `node scripts/generate-social-image.mjs`; uses Sharp already installed through Astro. Font rendering may vary across operating systems; the checked-in PNG is the deployable asset. |
| Easier access to writing | `src/pages/index.astro`, `src/styles/global.css` | Writing is the primary action. Latest Writing precedes focus areas in DOM, visual, and keyboard order at every width. The desktop hero retains its two columns; smaller screens get a shorter illustration. Role-specific focus links have 44px targets. |
| Personal, scannable About | `src/pages/about.astro`, `src/styles/global.css` | Supplied first-person introduction, no repeated Executive Profile, consistent Helix description, stacked section introductions, tighter spacing, role anchors, and metric context links. Retained roles preserve their titles and dates; education is unchanged. The SiteIQ, permit-tracking, RPA, Azure cost-savings, and NTN staffing percentages were subsequently removed following Kevin’s clarifications. All percentage outcome claims have now been removed. |
| Readable text and focus | `src/styles/global.css` | Functional orange colors, underlined inline/contact links, visible keyboard focus, card focus protection, responsive grid sizing, and reduced-motion final illustration states. Decorative orange remains. |
| Clear article summaries and structure | `src/components/WritingCard.astro`, `src/pages/writing/index.astro`, all three Markdown articles | Supplied descriptions, H2 cards on the index and H3 elsewhere, and the exact requested editorial replacements/additions. |
| Clear contact paths | `src/components/Header.astro`, `src/components/Footer.astro`, `src/pages/writing/[slug].astro`, `src/lib/site.js` | Email Kevin labels, selectable address, existing LinkedIn/Threads destinations, and a restrained article-closing invitation. |
| Future evidence-based writing | `docs/helix-walkthrough-outline.md` | An unpublished outline and missing-input list outside the content collection. |

## Social-image decision

All pages use the branded default. Article-specific images are deferred: supporting variable title lengths reliably would add template fitting and per-article generation work. The shared PNG gives consistent results without changing the automatic Markdown publishing workflow. Existing article illustrations remain in the site.

## Contrast

Ratios calculated using sRGB relative luminance. Backgrounds checked: white `#ffffff`, site `#fbfaf8`, wash `#f4f6f7`, footer `#f5f7f8`, and page-bottom `#f7f8f8`.

| Use | Foreground/background | Ratio |
| --- | --- | --- |
| Functional orange text, labels, metrics, headline, icons | `#ad4300` / white | 5.87:1 |
| Functional orange across tested light backgrounds | `#ad4300` / site through wash | 5.41–5.62:1 |
| Primary button | white / `#ad4300` | 5.87:1 |
| Hover/active button | white / `#873400` | 8.33:1 |
| Hover text and organization names | `#873400` / tested backgrounds | 7.68–8.33:1 |
| Muted text | `#5e6871` / tested backgrounds | 5.24–5.68:1 |
| Dark text and focus ring | `#111820` / tested backgrounds | 16.48–17.87:1 |

Focus rings are offset onto the light surface around buttons. Bright `#ff6a00` remains in decorative paths, illustrations, and accents. These calculations and browser checks are not a full assistive-technology audit.

## Confirmations and remaining factual questions

Kevin confirmed the remaining career and pilot figures: 22+ years, National Title Network’s growth from startup to more than 300 employees nationwide within 18 months, Capstone’s growth from four to 16 offices across three counties, and the eight-person AI pilot. These figures remain as supplied. This confirmation does not restore previously removed claims or supply answers about software validation and Helix’s authorization timeline.

Confirmed follow-up: SiteIQ analyzed vacant land for development potential. Kevin received guidance on evaluation criteria and built the rest with AI. At Kevin’s request, the unsupported percentage reduction was removed from both the metric strip and role description. The remaining two metrics use two desktop columns.

Confirmed follow-up: Kevin built a system to track engineering permits from start to finish, including follow-up after issuance. It helped staff focus on permits needing priority attention. This qualitative account replaces the unconfirmed claim of a percentage reduction in project delays.

Confirmed follow-up: At Vantage Point Title, the team automated repetitive ResWare tasks, including moving files between tasks, balancing files, and adding data pulled from documents. Kevin learned the original workflows, designed new workflows, worked with the vendor to build bots, and led testing and implementation. The homepage and About now describe this work without the unconfirmed efficiency percentage or unsupported claims about shifted staff capacity.

Confirmed follow-up: Kevin designed and managed the full Azure migration project, moving more than 10 servers and production storage. The unconfirmed cost-savings percentage was removed from the role description and replaced in the metric strip with the confirmed server count. No cost reduction or expansion outcome is claimed.

Confirmed follow-up: Improvements at National Title Network came from workflow improvements within ResWare. This was distinct from the RPA work at Vantage Point Title. The NTN description now states the workflow work without the unconfirmed staffing reduction or sustained-volume claim.

Confirmed follow-up: Kevin confirmed Vantage Point Title’s growth from 50 to more than 350 employees across seven locations. The existing homepage and About wording is retained.

Confirmed follow-up: Kevin corrected Vantage Point Title’s annual technology budget to $1 million and confirmed that he directly managed it. The role description now reflects both points.

Confirmed follow-up: Kevin confirmed that VizionX’s team of more than 25 across technology, operations, and business development included both employees and contractors. The role description now makes that scope explicit.

Editorial follow-ups:

- Confirmed software-validation practices: Kevin tests in development, runs tests, and occasionally has others review the work. Test types, automation, coverage, and the scope of others’ reviews were not specified. Kevin approved the sentence “My process includes testing in development, running tests, and occasional review by others.” It has been added to the article source after “I don’t review every generated line myself.”
- Confirmed approval sequence: Kevin said he was in a position to build Helix and did so. Helix was not in any use before approval; the article now states that explicitly. This does not establish a formal pre-build authorization process, isolation, synthetic data, or specific access controls. An exact operational start date was not supplied and is not claimed.
- Confirmed build effort: Kevin confirmed about ten workdays over five weeks, with planning beforehand. He also confirmed that two or three people over several months is a fair estimate for a similar build five years earlier. The article retains “Based on my experience” to identify the historical comparison as an estimate.

## After deployment

1. Confirm the deployed commit and load the homepage, About anchors, index, articles, and an unknown URL on `https://kevinmazur.dev`.
2. Verify `/social/kevin-mazur.png` responds successfully as a 1200 × 630 PNG and inspect live OG/Twitter tags, canonical URLs, publication metadata, and JSON-LD.
3. Check the live sitemap/robots behavior and that unpublished content remains absent.
4. Submit the homepage and all three article URLs to LinkedIn Post Inspector; refresh cached previews and inspect the crop, title, and description. This cannot be verified from local changes and has not passed yet.
5. Verify social destinations and mailto behavior in your intended browser/mail client; consider VoiceOver and Safari checks before announcing.

## Local validation completed

- `npm run build` passes: Astro check reports zero errors, warnings, or hints; seven pages build successfully. There are no configured lint or test commands and no new test framework was added.
- Headless Chrome reviewed the built output at 320, 390, 768, 1024, and 1440px: 35 page/viewport combinations covering Home, About, Writing, all three articles, and 404. No horizontal overflow. Images were scrolled into view to verify lazy loading; all loaded. No unexpected browser errors.
- Captured and inspected screenshots, including homepage composition, article body/discussion/related cards, About, footer, and 404 recovery. The headline remains four lines at 1024 and 1440px.
- Keyboard Tab/Enter checks confirm a visible skip link and focus transfer to `main`; actions, cards, and focus links follow the page order. Card focus remains visible and clears the sticky header.
- Experience, HCPA, Vantage Point Title, and Florida Land Design anchor destinations were checked at 390, 768, 1024, and 1440px; none were obscured by the header. Other role IDs exist and use the same offset rule.
- Reduced-motion emulation exposes complete paths and nodes without waiting for drawing animations. Normal-motion About reveal was also checked.
- A doubled root font size was checked on Home, About, Writing, and Build or Buy at 320, 720, and 1024px. No page overflow after fixes. This is a text-sizing stress test, not a substitute for browser zoom or a screen-reader audit.
- Built HTML checks passed: one H1/main per page, Writing-index H2 cards, production canonicals, parseable Person/BlogPosting data, publication dates, no invented modified dates, matching PNG metadata, and 102 internal link/anchor references.
- All three articles have `featured: false` and appear on the homepage, index, and full routes. A temporary `draft: true` article was built and confirmed absent from cards, related writing, routes, and sitemap. The fixture was removed and the final production build restored.
- Intentional navigation to an unknown URL returned the custom 404 with Return Home. The expected HTTP 404 is the only error in that recovery test.
- `git diff --check` passes. Package files, existing illustration assets, robots file, sitemap configuration, and publication helpers were not changed.

Screenshots and machine-readable check results are retained in `/private/tmp/km-review/` for local review. They are temporary artifacts and are not part of the site build. Live Netlify behavior, actual social previews, Safari, and assistive-technology behavior remain unverified.
