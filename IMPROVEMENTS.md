# Otantik — visual improvement log

## Pass 1 — 2026-07-08
Baseline: first verified build (after feedback round 1: logo lockup, cinematic veil jumps, touch-glow, copy rewrite, Marcellus/Reem Kufi typography).

- **Brand geometry as atmosphere**: the logo's mihrab lattice now floats as a faint watermark (4–5% opacity) at the edge of the Story and Cinema sections — the brand pattern lives in the page, not just the header.
- **Breathing firelight**: the hero's bottom edge glows with a slow-pulsing ember gradient (5.5s cycle), like standing near the grill.
- **Gold as material**: the gold-gradient headlines now carry a slow sheen that travels across the letters (9s loop) — metal catching light instead of a static gradient.
- **Candlelight sweep on buttons**: hovering any button sends a soft warm light-band across it.
- **Menu rows come alive**: hovering a dish warms the name to bright gold and slowly zooms its photo inside the frame.

All effects respect `prefers-reduced-motion`. Verified by screenshot against the previous pass: hero, story, cinema, and menu all visibly richer; no readability regressions.

## Pass 2 — 2026-07-09
Baseline: pass 1.

- **Film grain**: a fixed 5%-opacity fractal-noise layer over the whole site — the "shot on film" material that makes dark pages feel analog instead of flat.
- **Hero entrance**: the title now rises word by word (staggered, 1.25s) instead of fading as one block. Word-level split only — letter splitting would break Arabic glyph shaping. Fixed a real bug found during verification: `background-clip: text` doesn't paint into inline-block children, so each word span now carries its own gold gradient (and the class is restored on the h1 after a language switch).
- **Menu chapter ornaments**: every category rule now starts with a small gold ◆ diamond sitting on the hairline — quiet Levantine geometry at each chapter head.
- **Ghost numerals**: giant outlined Marcellus numerals (01/02/03) float behind the signature dishes — editorial depth without noise.
- **Ken Burns in the lightbox**: the dish photo drifts slowly (scale 1→1.07 over 14s) while open — the plate feels alive.
- **Progress line glow**: the gold scroll-progress line now carries a soft light bloom at its tip.

Verified: hero title visible and animating in gold, 183 dishes intact, diamond ornaments rendering, zero console errors. Side-by-side vs pass 1: obviously richer; kept.

## Pass 3 — 2026-07-09 · The dedicated mobile pass (user-directed, /ui-ux-pro-max)
Baseline: pass 2. User confirmed: glow+ripple touch effect, bottom action bar, horizontal reels, bold & spare copy.

- **Real fix for touch scrolling**: Lenis and scroll-scrubbed parallax are now *disabled entirely* on touch devices (`pointer: coarse`) — phones get pure native scrolling; embers drop from 42 to 18 particles; `touch-action: manipulation` kills tap delay; menu sections use `content-visibility: auto` so 183 rows off-screen cost nothing.
- **Bottom action bar (mobile)**: fixed thumb bar — Call · **Reserve** (gold primary) · Menu — with SVG icons, safe-area padding, blur backdrop. RTL-aware.
- **Horizontal swipe reels (mobile)**: signature dishes and cinema clips are snap-scrolling card reels with the next card peeking; category cards go 2-up. The phone page is half as tall and feels native.
- **Bottom-sheet lightbox (mobile)**: dish details slide up from the bottom with a grab handle and swipe-down dismiss. (Fixed: handle needed `position: relative` on the card.)
- **Touch effect upgraded**: the warm glow now *chases* the finger with a springy lag (rAF lerp), and every press fires a golden ripple ring through the photo.
- **Geist replaces Inter** as the Latin/Chinese body font (self-hosted 400/500/600 woff2).
- **Copy rewritten bold & spare** in all three languages — e.g. hero: "نار البلوط. بهارات الشام. طاولة لا تُنسى." / "Oak fire. Damascus spice. A table you will not forget." Fire quote: "The embers never hurry. Neither do we."

Verified at 375px (AR + EN), sheet + reels + bar all functioning, desktop unchanged (Lenis active, bar hidden, editorial rows restored), zero console errors.

## Pass 4 — 2026-07-09 (user-directed)
User feedback: site looked dull/flat, no way to see a dish full-screen, footer was cluttered.

- **Vibrancy pass**: every photo and video across the site (hero, fire strip, category cards, dish thumbnails, signature rows, cinema clips, lightbox) now carries a `saturate()/brightness()` boost, hover states push further into richer color, scrims lightened so footage reads brighter, ambient background glow strengthened, buttons/eyebrows/marquee text gained gold glow and gradient depth. The palette itself didn't change — the *rendering* of it did.
- **Full-screen dish viewer**: new `#fullview` overlay — tap any dish photo (signature rows on the homepage, or the expand button on the menu lightbox) to see it edge-to-edge at full resolution with a caption, close button, and Esc/backdrop dismiss.
- **Footer rebuilt**: replaced the 3-column list-heavy layout with one calm centered block — logo lockup, tagline, ornamental divider, address, a single contact line, halal badge, rights line. Same information, far less visual noise.
- **Real bug found and fixed during verification**: the ambient logo-lattice watermark added in pass 2 was bleeding past its section edge and causing page-wide horizontal overflow (confirmed via `document.documentElement.scrollWidth` exceeding viewport width) — added `overflow-x: clip` on the story/cinema sections plus a defensive `overflow-x: hidden` on `<html>`. Verified fixed at both 1280px and 375px.

Verified: full-view opens from both entry points with correct high-res image and caption, footer renders as one clean centered column, zero horizontal overflow at desktop and mobile widths, zero console errors.

## Pass 5 — 2026-07-09 (user-directed)
User feedback: the three-pill language switcher (عربي / EN / 中文) looked bad.

- Replaced with a single circular globe-icon button. Click opens a small elegant dropdown (right-aligned under the icon, RTL-aware) listing all three languages with the active one marked by a gold dot; selecting one applies it and closes the panel; clicking outside or Esc also closes it. Gold gradient + slight rotation on the open state.
- Frees real header space on mobile — one icon next to the burger menu instead of three cramped text pills.
- Verification caught a recurring gotcha this session: the preview browser was serving stale cached `main.css`/`main.js` after edits, making a real fix look broken. Added `?v=4` cache-busting query params to the CSS/JS `<link>`/`<script>` tags so this stops costing verification time — bump the version string on future edits if the same symptom reappears.

Verified: icon renders and opens/closes correctly, language selection updates content + direction (AR/RTL ↔ EN,ZH/LTR) and closes the panel, outside-click dismiss works, fits without overflow at 375px and 1280px, zero console errors.

## Pass 6 — 2026-07-09 (user-directed: scroll-driven motion + font audit + ambient touch space)
Implemented directly (not handed off to a separate model/session) so the same verification loop
used all session could catch real bugs rather than trusting untested instructions.

- **Font audit**: `--font-body` was already Geist end-to-end; removed ~20 dead unused `@font-face:
  'Inter'` declarations from the auto-generated `css/fonts.css` (and `scripts/get_fonts.py`'s
  Google Fonts request, so they don't come back on a regen) plus the orphaned Inter woff2 files —
  pure payload cleanup, nothing was rendering with Inter. Strengthened text-shadow (added a tight
  near-black contact shadow under the existing soft glow) on hero title/kicker/sub, fire-strip
  quote, category-card labels, and cinema clip captions, to compensate for the brightness/
  saturation boost from pass 4 — verified the base palette itself already passes WCAG AA/AAA
  (taupe-on-charcoal ≈ 6.9:1, gold-bright-on-charcoal ≈ 11.2:1).
- **True scroll-driven motion**: hero video now slow-zooms as you scroll past it; the fire-strip
  video zooms continuously for the whole time its quote is on screen; signature-dish ghost
  numerals drift on a deeper parallax; each menu category's gold divider line now draws itself
  (scaleX 0→1, RTL-aware transform-origin) as it scrolls into view instead of appearing static.
  Desktop uses GSAP ScrollTrigger `scrub` (via a new shared `bindScrollMotion()`/
  `window.OTANTIK_BIND_MOTION()` helper safe to call repeatedly on dynamically-rendered content).
  **Mobile deliberately does not get any of the above** — instead it gets the same visual result
  through native CSS `animation-timeline: view()` (feature-detected via `@supports`, gated to
  `pointer: coarse`), which runs on the compositor thread with zero JS scroll listeners. This was
  a hard constraint from the prior mobile-scroll fix (no Lenis/scrub on touch) and is the reason
  scroll-driven motion could be added at all without regressing that fix.
- **Ambient touch-reactive gap band**: the flat, empty top-padding void on `#signatures` (the
  exact area the user circled in a screenshot, between the marquee and "Signatures") now carries
  the same faint mihrab-lattice watermark already used elsewhere, plus a handful of slow-drifting
  ember sparks (pure CSS, respects reduced-motion), plus the site's existing `.glow`/ripple touch
  mechanic reused as-is (not reinvented) — touching that empty band produces the identical warm
  glow-follows-finger + ripple pulse as touching a dish photo.
- **Two real bugs caught during verification, not assumed away:**
  1. `menu.js` was rendering the 183-dish menu **twice** on every page load — `main.js`'s
     `applyLang()` dispatches an `otantik:lang` event as part of the very first boot, which
     `menu.js` also listened for, plus its own `DOMContentLoaded` handler called `render()`
     again. Confirmed via `ScrollTrigger.getAll()` showing 28 bound triggers for 14 divider
     lines. Fixed by attaching the `otantik:lang` listener only *after* the initial render.
  2. The category rail's scroll-spy (`initSpy()` in `menu.js`) called
     `chip.scrollIntoView({block:"nearest", inline:"center"})` to keep the active chip visible —
     but because `.cat-rail` is `position: sticky`, the `block: "nearest"` axis was periodically
     dragging the **page's own vertical scroll** back toward the rail, fighting Lenis and any
     programmatic scroll. Confirmed by driving `OTANTIK_LENIS.scrollTo()` directly and watching
     `scrollY` refuse to move past ~1250px on a 17,000px-tall page. Fixed by scrolling only the
     rail's own `scrollLeft` instead of using `scrollIntoView` at all.

Verified: fire-strip video scale scrubs exactly linearly with scroll progress (checked at
progress 0.5 → scale 1.07 of 1→1.14 range), menu divider draw scrubs exactly linearly (checked at
progress 0.5 → `scaleX(0.5)` precisely), gap-glow renders with zero layout overlap/overflow and
responds to pointer with glow+ripple, zero console errors, zero horizontal overflow at 375px and
1280px, in Arabic/RTL and English/LTR.
