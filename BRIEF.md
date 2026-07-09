# OTANTIK — Cinematic Restaurant Website
### Build Brief / Master Prompt · v1.0 · 2026-07-08

---

## 1. Project in one paragraph

A cinematic, trilingual (Arabic-first RTL, English, Chinese) showcase-and-reservations website for **Otantik**, a Levantine fine-dining restaurant in Guangzhou, China. The site replaces a generic WooCommerce catalog (SKUs, "login to order", product tabs) with a dark, fire-lit, editorial experience: full-bleed slow-motion grill footage, a single continuous menu built for effortless reading, and a frictionless reservation flow. **No cart, no checkout, no payments — explicitly out of scope.** Table QR codes link straight to the digital menu (view-only). The finished product must feel like a $10,000 website within the first three seconds of the hero loading.

**The one-line brand promise:** *Levantine fire, Guangzhou table.*

---

## 2. Creative direction — "Fire & Brass"

Cinematic means restraint, not spectacle. Every choice should feel like dim, warm restaurant lighting — never a bright storefront.

### Palette
| Role | Color | Hex |
|---|---|---|
| Background (base) | Charcoal near-black | `#0E0C0A` |
| Background (raised: cards, modals) | Warm ember black | `#181310` |
| Primary accent | Brass / amber gold | `#C89B5A` |
| Accent hot (hover, live states, spice) | Ember orange | `#D96C2C` |
| Text primary | Cream — never pure white | `#F2E9DC` |
| Text secondary | Smoked taupe | `#9C8E7E` |
| Hairlines / dividers | Gold at 20–25% opacity | `rgba(200,155,90,.22)` |

Gold is a **seasoning, not a sauce**: hairline rules, small caps labels, price digits, hover states. Large gold surfaces are forbidden. Optional metallic gradient (like Golden Sama headings) reserved for the logotype and one hero headline only.

### Typography (all self-hosted — no Google Fonts CDN, it's unreliable in mainland China)
| Script | Display / dish names | Body / UI |
|---|---|---|
| Arabic (primary) | **Amiri** (Naskh serif — calligraphic, elegant) | **IBM Plex Sans Arabic** |
| Latin | **Cormorant Garamond** (light, high contrast) | **Inter** |
| Chinese | **Noto Serif SC** (subsetted!) | **Noto Sans SC** (subsetted!) |

Rules: dish names large and serif; prices in tabular figures, sans, gold; body text never below 16px; generous letter-spacing on small-caps English labels ("MEZZE", "FROM THE FIRE"). Chinese fonts must be subsetted to used glyphs — full Noto SC is 8MB+ and will destroy load time.

### Photography / video direction (the real source of "cinematic")
- Close-up, low-key, single warm key light. Visible smoke, char, flame. Hands plating. Slow motion (or AI-generated cinematic clips — same Higgsfield pipeline as Golden Sama: one hero still → multiple 5s clips).
- Every image color-graded to the palette: lifted warm shadows, amber highlights, muted greens.
- Video loops: muted, 5–8s, seamless, `object-fit: cover`, poster frame for slow connections, self-hosted MP4/WebM (never YouTube — blocked in China).

### Motion language
- Slow fades and 600–900ms eases (`cubic-bezier(0.22, 1, 0.36, 1)`), subtle parallax (≤8% translate), letter-spacing ease-in on headings.
- GSAP ScrollTrigger + Lenis smooth scroll (proven stack from Golden Sama — remember: call `lenis.resize()` on ScrollTrigger `refresh`, or pinned sections break page height).
- A thin gold scroll-progress line at the top of the viewport.
- Nothing bounces, spins, or slides in from off-screen. `prefers-reduced-motion` fully respected.

---

## 3. Languages & RTL — Arabic is the default

- **AR (default, RTL) · EN (LTR) · 中文 (LTR).** Language switch in the header: `عربي · EN · 中文`.
- Entire layout mirrors under RTL: nav order, arrows, parallax drift direction, menu item alignment (name right / price left in AR, reversed in EN/ZH). Use CSS logical properties (`margin-inline-start`, `text-align: start`) everywhere — no hardcoded left/right.
- All copy lives in a single I18N dictionary (same pattern as Golden Sama `js/main.js`), including `aria-labels`, form validation messages, and the reservation confirmation.
- Menu item data carries all three languages per field: `{ name: {ar, en, zh}, desc: {ar, en, zh}, price, tags }`.
- Numbers/prices: Western digits in all three languages (`¥88`), currency always ¥.

---

## 4. Site map

```
/            Home (cinematic scroll, one page)
/menu        The Menu (the flagship page — see §6)
/story       Our Story (short editorial page)
/events      Private Events (banquet hall / group dining)
/reserve     Reservations (also present as section + sticky CTA everywhere)
/contact     Location & Contact (map, hours, phones, WeChat)
```

Dropped from the old site on purpose: Franchises, News, Products catalog, login, cart, wishlists, compare, SKUs, review tabs, social-share rows. If the client insists on Franchises later, it becomes one paragraph + contact link on /story.

**Persistent header:** logo (center or start-aligned per direction), 5 links, language switch, and one gold-outline **"احجز طاولة / Reserve"** button. Header is transparent over the hero, gains a charcoal blur backdrop after 80px scroll.

**Persistent footer:** hours, address (AR/EN/ZH), phone tap-to-call, WeChat QR code, small map link, halal badge, minimal legal line.

---

## 5. Homepage — section by section

1. **Hero.** Full-viewport looping video: flames licking lamb chops on the grill, slow motion. Logo fades in, then one line — *نار الشام، على طاولة قوانغتشو* / "Levantine fire, Guangzhou table" — then two CTAs: solid-gold **Reserve a Table**, ghost **View the Menu**. Thin animated scroll cue. No sliders, no carousel, no headline soup.
2. **Signature dishes (3–4 max).** Alternating editorial rows: large photo one side, dish name in serif + two-line description + price on the other. Each links into /menu anchored to that dish. This is a *tasting*, not the whole menu.
3. **The fire (brand strip).** One full-bleed video of the charcoal grill with a short manifesto (3–4 lines) about live-fire Levantine cooking and fresh ingredients. Parallax on the text, not the video.
4. **The room.** 2–3 interior photos in a broken grid — brass lamps, linen, warm light. One quoted guest review max (real one).
5. **Private events teaser.** Single wide photo + one line + link.
6. **Reserve band.** Charcoal section, gold hairline top and bottom: "Tonight's table is waiting." Inline mini reservation form (date · guests · phone) that hands off to /reserve.
7. **Find us.** Address block + hours + static stylized map card (dark-styled 高德/Amap embed or a designed static map image linking out to Amap — **never Google Maps**, it's broken in mainland China).

---

## 6. The Menu — the flagship page (this is where the $10K shows)

The anti-pattern to kill: one templated product page per dish. The replacement: **one continuous, beautiful, scannable menu.**

### Structure
- Category sections in dining order: **Mezze (cold/hot) · From the Fire (grill) · Mangal Breads & Pide · Seafood · Rice & Specialties · Desserts · Drinks**.
- **Sticky category rail**: horizontal chip bar under the header (RTL-aware scroll). Active category highlights in gold as you scroll (scroll-spy). One tap jumps to the section — critical for phone use at the table via QR.
- Each category opens with a small serif heading + one-line poetic descriptor + gold hairline.

### The dish row (list-first, photo-second — like a real fine-dining menu)
```
اسم الطبق بالسيرف الكبير ..................... ¥88
سطر واحد وصفي فاتح للشهية — لا أكثر
[🌶️] [🌿] [🥜]   [thumbnail 72px, rounded, optional]
```
- Name (serif, cream) · dotted gold leader · price (gold, tabular). One-line description in secondary color. Small thumbnail only where photography is strong — a weak photo is worse than none.
- **Tag icons with a legend at the top of the page:** spice level (1–3 chilis), vegetarian, vegan, contains nuts, gluten, signature-dish flame icon, chef's choice. Everything is halal — state it once, proudly, in the page intro; don't badge every row.

### The dish lightbox (replaces the old product page)
Tap a dish → full-screen modal, no page reload: large photo (or video loop for signatures), name in the active language, full description, price, tags spelled out in words, "pairs well with…" line, and one CTA — **Reserve a Table**. Close returns to the exact scroll position. Deep-linkable (`/menu#lamb-chops`) so QR codes and the homepage can target dishes.

### Table QR mode
`/menu?table=1` (or plain `/menu`) — same page, but the header collapses to a slim bar and a small note appears: "اطلب من النادل — Order with your server". Print sheet with per-table QR codes is a deliverable.

### Content requirement
Rewrite every description: one evocative line, ingredients-forward, no marketing fluff. *"Lamb Chops — Grilled Lamb Ribs"* becomes *"ريش غنم على فحم البلوط — تتبيلة سبع بهارات، تُشوى حتى يذوب الدهن ويحترق الطرف"* / "Oak-charcoal lamb ribs, seven-spice rub, grilled until the fat melts and the edges char."

---

## 7. Reservations (the only "transaction" on the site)

- **Form fields:** name · phone · date · time · number of guests · occasion (optional) · note (optional). Three-step feel on mobile (who → when → confirm), single card on desktop.
- On submit: warm confirmation state ("طاولتك بانتظارك — سنؤكد خلال ساعة") + the restaurant receives it instantly (email notification + optionally a WeChat Work webhook; lightweight form backend, e.g. a tiny serverless endpoint — no heavy framework).
- **Always offer the human fallbacks beside the form:** tap-to-call phone, **WeChat QR (primary channel for guests in China — WhatsApp is blocked in mainland China; keep WhatsApp as a secondary link for international/VPN guests only)**.
- Sticky mobile bottom bar site-wide: 📞 Call · 💬 WeChat · **Reserve** (gold).

---

## 8. Other pages (short, editorial)

- **/story:** 3 beats — origin (Levant → Guangzhou), the fire (why charcoal, why fresh), the people (chef portrait, one quote). ~150 words per language. One video, three photos.
- **/events:** banquet space photos, capacity numbers, set-menu mention, inquiry form (reuses reservation form with an "event" flag).
- **/contact:** big type address in three languages, hours table, phones, WeChat QR, Amap-linked map card, parking/metro note (Guangzhou Metro line + exit).

---

## 9. Technical requirements

- **Stack:** semantic HTML + modern CSS + vanilla JS, GSAP ScrollTrigger + Lenis (self-hosted bundles, not CDN). No SPA framework needed. Menu and site copy rendered from structured JSON (`data/menu.json`, `data/i18n.json`).
- **CMS / staff self-management:** a lightweight admin (single protected page or headless CMS) that edits `menu.json`: add/remove dish, edit trilingual name/description, price, tags, photo upload, show/hide toggle, reorder. Staff never touch code. (Decap CMS or a tiny custom editor both acceptable; **no Google-dependent services**.)
- **China-safe checklist:** self-host fonts/JS/video · Amap not Google Maps · no YouTube/Vimeo/Google Fonts/gstatic/Facebook pixels · host outside mainland behind a China-friendly CDN (no ICP needed for a static site) or mainland + ICP if the client has one.
- **Performance budget:** LCP < 2.5s on 4G · hero poster image < 120KB · each video loop < 2.5MB · lazy-load everything below the fold · WebP/AVIF images · font subsets (especially Chinese).
- **Mobile-first:** the QR-at-table user on a phone is the #1 persona for /menu. Test RTL + LTR at 360px before anything else.
- **SEO/meta:** trilingual `hreflang`, restaurant schema.org markup (`Restaurant`, `Menu`, `MenuItem` — real structured data), OpenGraph cards with the hero image.
- **Accessibility:** visible focus states in gold, modal focus-trap, `prefers-reduced-motion`, alt text in the active language.

---

## 10. Deliverables & asset checklist

**Deliverables:** the site (6 pages) · menu admin · per-table QR print sheet · 3-language content pass · deployment + handover doc.

**Needed from the restaurant (blockers to flag early):**
1. Logo files (vector or high-res)
2. Full menu list with prices (any language — we translate)
3. Photo/video shoot of 10–15 hero dishes + interior, **or** approval to generate cinematic AI footage from reference stills (Higgsfield pipeline)
4. WeChat official QR, phone numbers, exact address, hours
5. Real guest reviews (1–2), chef name/photo for /story

---

## 11. Explicitly out of scope

No cart · no checkout · no WeChat Pay/Alipay integration · no user accounts · no delivery logistics · no franchise portal · no blog/news. If ordering is requested later, it's a Phase 2 with its own budget (merchant accounts + ICP licensing are the client's prerequisite homework).

---

## 12. Definition of "done"

Open the homepage on a phone, in Arabic, on restaurant Wi-Fi: the fire video is moving within 2.5 seconds, the type feels like a hardcover menu, nothing jitters, and reserving a table takes under 30 seconds. Then switch to 中文 and everything — layout, menu, form, confirmation — is equally native. That's the $10,000 moment.
