/* ============================================================
   OTANTIK — menu page: render, rail scroll-spy, search, lightbox
   ============================================================ */
(function () {
  "use strict";
  var MENU = window.OTANTIK_MENU;
  if (!MENU) return;

  var railInner = document.querySelector(".rail-inner .chips");
  var body = document.getElementById("menu-sections");
  var searchInput = document.getElementById("menu-search");
  var emptyMsg = document.querySelector(".menu-empty");
  var lightbox = document.getElementById("lightbox");
  var lastFocus = null;
  var currentItem = null;

  var TAGS = ["veg", "spicy", "nuts", "sig"];
  var TAG_GLYPH = { veg: "☘", spicy: "🌶", nuts: "●", sig: "✦" };

  function lang() { return window.OTANTIK_I18N.lang; }
  function t(k) { return window.OTANTIK_I18N.t(k); }

  function tagIcon(tag, withLabel) {
    var s = '<span class="tag-ico tag-' + tag + '" title="' + t("legend." + tag) + '">' + TAG_GLYPH[tag] + "</span>";
    if (withLabel) s = "<span>" + s + t("legend." + tag) + "</span>";
    return s;
  }

  /* ---------------- render ---------------- */
  function render() {
    var L = lang();
    railInner.innerHTML = MENU.categories.map(function (c) {
      return '<button class="rail-chip" data-cat="' + c.id + '">' + c.name[L] + "</button>";
    }).join("");

    body.innerHTML = MENU.categories.map(function (c) {
      var items = MENU.items.filter(function (it) { return it.cat === c.id; });
      var rows = items.map(function (it) {
        var tags = (it.tags || []).filter(function (x) { return TAGS.indexOf(x) > -1; });
        return '<button class="dish" data-slug="' + it.slug + '" data-search="' +
          (it.name.ar + " " + it.name.en + " " + it.name.zh).toLowerCase().replace(/"/g, "") + '">' +
          '<span class="glow thumb-wrap"><img class="dish-thumb" loading="lazy" src="' + it.img + '" alt="' + it.name[L] + '"></span>' +
          '<span class="dish-mid">' +
            '<span class="dish-name-row"><span class="dish-name">' + it.name[L] + '</span><span class="dish-dots"></span></span>' +
            '<span class="dish-desc">' + it.desc[L] + "</span>" +
            (tags.length ? '<span class="dish-tags">' + tags.map(function (x) { return tagIcon(x); }).join("") + "</span>" : "") +
          "</span>" +
          '<span class="dish-price">¥' + it.price + "</span>" +
        "</button>";
      }).join("");
      return '<section class="menu-section" id="' + c.id + '" data-cat="' + c.id + '">' +
        '<div class="wrap">' +
          '<div class="ms-head"><h2>' + c.name[L] + '</h2><span class="ms-count">' + items.length + "</span></div>" +
          '<p class="ms-line">' + c.line[L] + "</p>" +
          '<div class="ms-rule" data-draw></div>' +
          '<div class="dish-list">' + rows + "</div>" +
        "</div>" +
      "</section>";
    }).join("");

    initSpy();
    applyFilter();
    if (window.OTANTIK_BIND_MOTION) window.OTANTIK_BIND_MOTION(body);
  }

  /* ---------------- rail scroll-spy + click ---------------- */
  var spy = null;
  function initSpy() {
    if (spy) spy.disconnect();
    var chips = {};
    document.querySelectorAll(".rail-chip").forEach(function (ch) { chips[ch.getAttribute("data-cat")] = ch; });
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.getAttribute("data-cat");
        document.querySelectorAll(".rail-chip.on").forEach(function (c) { c.classList.remove("on"); });
        var chip = chips[id];
        if (chip) {
          chip.classList.add("on");
          /* scroll only the horizontal chip rail — scrollIntoView's "nearest" block
             axis can drag the page's own vertical scroll when the rail is sticky,
             fighting Lenis and any programmatic scroll on every category change */
          var railInner = chip.closest(".rail-inner");
          if (railInner) {
            var target = chip.offsetLeft - (railInner.clientWidth - chip.offsetWidth) / 2;
            railInner.scrollTo({ left: target, behavior: "smooth" });
          }
        }
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    document.querySelectorAll(".menu-section").forEach(function (s) { spy.observe(s); });
  }

  function jumpTo(sec) {
    /* cinematic cut: fade to black, land directly on the section, fade in —
       no fast-forward scrolling through the whole menu */
    var go = function () {
      /* recompute inside the cut: lazy images may have changed layout */
      if (window.OTANTIK_LENIS) window.OTANTIK_LENIS.resize();
      var top = sec.getBoundingClientRect().top + window.scrollY - 150;
      if (window.OTANTIK_LENIS) window.OTANTIK_LENIS.scrollTo(top, { immediate: true, force: true });
      window.scrollTo({ top: top, behavior: "auto" });
    };
    if (window.OTANTIK_CUT) window.OTANTIK_CUT(go); else go();
  }

  document.addEventListener("click", function (e) {
    var chip = e.target.closest(".rail-chip");
    if (chip) {
      var sec = document.getElementById(chip.getAttribute("data-cat"));
      if (sec) jumpTo(sec);
    }
  });

  /* ---------------- search filter ---------------- */
  function applyFilter() {
    var q = (searchInput.value || "").trim().toLowerCase();
    var any = false;
    document.querySelectorAll(".menu-section").forEach(function (sec) {
      var vis = 0;
      sec.querySelectorAll(".dish").forEach(function (d) {
        var hit = !q || d.getAttribute("data-search").indexOf(q) > -1;
        d.style.display = hit ? "" : "none";
        if (hit) vis++;
      });
      sec.style.display = vis ? "" : "none";
      if (vis) any = true;
    });
    emptyMsg.classList.toggle("show", !any);
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }
  searchInput.addEventListener("input", applyFilter);

  /* ---------------- lightbox ---------------- */
  function openDish(slug, push) {
    var it = null;
    for (var i = 0; i < MENU.items.length; i++) if (MENU.items[i].slug === slug) { it = MENU.items[i]; break; }
    if (!it) return;
    var L = lang();
    var cat = MENU.categories.filter(function (c) { return c.id === it.cat; })[0];
    var tags = (it.tags || []).filter(function (x) { return TAGS.indexOf(x) > -1; });
    currentItem = it;
    lightbox.querySelector(".lb-card").innerHTML =
      '<div class="lb-media glow"><img src="' + it.img + '" alt="' + it.name[L] + '">' +
        '<button class="lb-close" aria-label="' + t("lb.close") + '">✕</button>' +
        '<button class="lb-expand" aria-label="Full view"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg></button></div>' +
      '<div class="lb-body">' +
        '<div class="lb-cat">' + (cat ? cat.name[L] : "") + "</div>" +
        '<h3 class="lb-name">' + it.name[L] + "</h3>" +
        '<p class="lb-desc">' + it.desc[L] + "</p>" +
        (tags.length ? '<div class="lb-tags">' + tags.map(function (x) { return tagIcon(x, true); }).join("") + "</div>" : "") +
        '<div class="lb-price">¥' + it.price + "</div>" +
      "</div>";
    lastFocus = document.activeElement;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (window.OTANTIK_LENIS) window.OTANTIK_LENIS.stop();
    lightbox.querySelector(".lb-close").focus();
    if (push !== false) history.replaceState(null, "", "#" + slug);
  }

  function closeLB() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (window.OTANTIK_LENIS) window.OTANTIK_LENIS.start();
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", function (e) {
    var d = e.target.closest(".dish");
    if (d) { openDish(d.getAttribute("data-slug")); return; }
    /* full view: expand button or tapping the dish photo itself */
    if ((e.target.closest(".lb-expand") || (e.target.tagName === "IMG" && e.target.closest(".lb-media"))) && currentItem) {
      var L = lang();
      window.OTANTIK_FULLVIEW(currentItem.img, currentItem.name[L] + "  ·  ¥" + currentItem.price);
      return;
    }
    if (e.target.closest(".lb-close") || e.target === lightbox) closeLB();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLB();
  });

  /* bottom-sheet swipe-down dismiss (mobile) */
  var sheetY = null;
  lightbox.addEventListener("touchstart", function (e) {
    var card = lightbox.querySelector(".lb-card");
    if (card && card.scrollTop <= 0) sheetY = e.touches[0].clientY;
    else sheetY = null;
  }, { passive: true });
  lightbox.addEventListener("touchmove", function (e) {
    if (sheetY === null) return;
    var dy = e.touches[0].clientY - sheetY;
    if (dy > 80) { sheetY = null; closeLB(); }
  }, { passive: true });

  /* ---------------- boot + deep link + lang rerender ----------------
     main.js's own DOMContentLoaded handler calls applyLang(), which
     dispatches "otantik:lang" as part of the very first page load —
     the listener below is attached only after our own initial render()
     runs, so that first dispatch (which fires before this callback even
     starts, since main.js's listener is registered first) never causes
     a redundant double-render with duplicate ScrollTrigger instances. */
  document.addEventListener("DOMContentLoaded", function () {
    render();
    document.addEventListener("otantik:lang", render);
    var slug = location.hash.replace("#", "");
    if (slug) {
      var target = null;
      MENU.items.forEach(function (it) { if (it.slug === slug) target = "dish"; });
      MENU.categories.forEach(function (c) { if (c.id === slug) target = "cat"; });
      if (target === "dish") setTimeout(function () { openDish(slug, false); }, 350);
      if (target === "cat") setTimeout(function () {
        var sec = document.getElementById(slug);
        if (sec) jumpTo(sec);
      }, 250);
    }
  });
})();
