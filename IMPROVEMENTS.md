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
