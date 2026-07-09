/* ============================================================
   OTANTIK — shared: i18n, header, motion, embers, reserve form
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    ar: {
      "nav.home": "الرئيسية",
      "nav.menu": "قائمة الطعام",
      "nav.story": "قصتنا",
      "nav.reserve": "الحجز",
      "nav.contact": "تواصل",
      "cta.reserve": "احجز طاولة",
      "cta.menu": "استكشف القائمة",
      "cta.fullmenu": "تصفّح القائمة الكاملة",
      "hero.kicker": "مطعم أوتانتيك · قوانغتشو",
      "hero.title": "روح الشام",
      "hero.sub": "نار البلوط. بهارات الشام. طاولة لا تُنسى.",
      "ab.call": "اتصل",
      "sig.eyebrow": "أطباق التوقيع",
      "sig.title": "من نار أوتانتيك",
      "sig.link": "شاهد في القائمة",
      "fire.quote": "الجمر لا يستعجل — ونحن كذلك.",
      "fire.who": "أوتانتيك · روح الشام",
      "story.eyebrow": "قصتنا",
      "story.title": "حيث يلتقي التقليد بالابتكار",
      "story.body": "كل طبق يبدأ بمكوّن يُنتقى بيد، ونار تُروَّض بصبر. وكل ضيف يُستقبل كأنه في بيته. هذه هي الشام — في قلب قوانغتشو.",
      "story.f1n": "نار الفحم",
      "story.f1l": "شواء على الجمر يومياً",
      "story.f2n": "من الشام",
      "story.f2l": "وصفات متوارثة بعناية",
      "story.f3n": "١٠٠٪ حلال",
      "story.f3l": "بلا استثناء",
      "cats.eyebrow": "القائمة",
      "cats.title": "تذوّق بلاد الشام كاملة",
      "cats.dishes": "طبقاً",
      "cinema.eyebrow": "سينما أوتانتيك",
      "cinema.title": "مشاهد من نارنا",
      "cinema.c1": "على نار الفحم",
      "cinema.c2": "مازة الشام",
      "cinema.c3": "دخان المنقل",
      "cinema.c4": "حلو الختام",
      "res.eyebrow": "الحجز",
      "res.title": "طاولة الليلة بانتظارك",
      "res.sub": "احجز عبر النموذج، أو اتصل بنا مباشرة — نؤكد الحجز خلال ساعة.",
      "res.name": "الاسم",
      "res.phone": "رقم الهاتف",
      "res.date": "التاريخ",
      "res.time": "الوقت",
      "res.guests": "عدد الضيوف",
      "res.note": "ملاحظات (اختياري)",
      "res.submit": "أرسل طلب الحجز",
      "res.notetext": "بإرسال الطلب يُفتح بريدك لتأكيد الإرسال — أو اتصل بنا مباشرة.",
      "res.okbig": "تم استلام طلبك",
      "res.oktext": "سنؤكد حجزك خلال ساعة عمل. أهلاً وسهلاً.",
      "g1": "ضيف", "g2": "ضيفان", "g3": "٣ ضيوف", "g4": "٤ ضيوف", "g5": "٥ ضيوف", "g6": "٦ ضيوف", "g7": "٧+ — مناسبة خاصة",
      "foot.tag": "روح الشام في قوانغتشو — مطبخ شامي على نار الفحم، وضيافة من القلب.",
      "foot.visit": "زورونا",
      "foot.addr": "رقم ١٤٩-٢ طريق شيوان، مبنى B2، يوشيو تسايفو منشن، حي ليوان، قوانغتشو",
      "foot.hours": "يومياً ٨:٠٠ صباحاً – ٨:٠٠ مساءً",
      "foot.contact": "تواصلوا معنا",
      "foot.halal": "جميع أطباقنا حلال",
      "foot.rights": "© ٢٠٢٦ مطعم أوتانتيك — جميع الحقوق محفوظة",
      "foot.soul": "The Soul of Levant",
      "menu.title": "قائمة الطعام",
      "menu.sub": "مائدة شامية كاملة على نار الفحم — من المقبلات إلى المشاوي والحلويات، وكل ما نقدّمه حلال.",
      "menu.search": "ابحث عن طبق…",
      "menu.empty": "لا نتائج — جرّب كلمة أخرى.",
      "legend.veg": "نباتي",
      "legend.spicy": "يحتوي فلفلاً حاراً",
      "legend.nuts": "يحتوي مكسرات",
      "legend.sig": "من توقيع الشيف",
      "lb.close": "إغلاق"
    },
    en: {
      "nav.home": "Home",
      "nav.menu": "Menu",
      "nav.story": "Our Story",
      "nav.reserve": "Reservations",
      "nav.contact": "Contact",
      "cta.reserve": "Reserve a Table",
      "cta.menu": "View the Menu",
      "cta.fullmenu": "Browse the full menu",
      "hero.kicker": "Otantik Restaurant · Guangzhou",
      "hero.title": "The Soul of Levant",
      "hero.sub": "Oak fire. Damascus spice. A table you will not forget.",
      "ab.call": "Call",
      "sig.eyebrow": "Signatures",
      "sig.title": "From the Otantik fire",
      "sig.link": "See it on the menu",
      "fire.quote": "The embers never hurry. Neither do we.",
      "fire.who": "Otantik · The Soul of Levant",
      "story.eyebrow": "Our Story",
      "story.title": "Where tradition meets innovation",
      "story.body": "Every plate begins with a hand-picked ingredient and a patiently tamed fire. Every guest is received like family. This is the Levant — in the heart of Guangzhou.",
      "story.f1n": "Live fire",
      "story.f1l": "charcoal-grilled daily",
      "story.f2n": "Levant-born",
      "story.f2l": "recipes handed down",
      "story.f3n": "100% halal",
      "story.f3l": "no exceptions",
      "cats.eyebrow": "The Menu",
      "cats.title": "Taste the whole Levant",
      "cats.dishes": "dishes",
      "cinema.eyebrow": "The Otantik Cinema",
      "cinema.title": "Scenes from our fire",
      "cinema.c1": "Over the coals",
      "cinema.c2": "The mezze table",
      "cinema.c3": "Mangal smoke",
      "cinema.c4": "A sweet ending",
      "res.eyebrow": "Reservations",
      "res.title": "Tonight's table is waiting",
      "res.sub": "Book with the form, or call us directly — we confirm within the hour.",
      "res.name": "Name",
      "res.phone": "Phone",
      "res.date": "Date",
      "res.time": "Time",
      "res.guests": "Guests",
      "res.note": "Note (optional)",
      "res.submit": "Send Reservation Request",
      "res.notetext": "Sending opens your mail app to confirm — or simply call us.",
      "res.okbig": "Request received",
      "res.oktext": "We will confirm your table within the hour. Ahlan wa sahlan.",
      "g1": "1 guest", "g2": "2 guests", "g3": "3 guests", "g4": "4 guests", "g5": "5 guests", "g6": "6 guests", "g7": "7+ — private occasion",
      "foot.tag": "The Soul of Levant in Guangzhou — charcoal-fired Levantine cooking and hospitality from the heart.",
      "foot.visit": "Visit us",
      "foot.addr": "No. 149-2 Xiwan Road, Building B2, YueXiuCaiFu Mansion, Liwan District, Guangzhou",
      "foot.hours": "Open daily · 8:00 – 20:00",
      "foot.contact": "Contact",
      "foot.halal": "All our food is halal",
      "foot.rights": "© 2026 Otantik Restaurant — all rights reserved",
      "foot.soul": "روح الشام",
      "menu.title": "The Menu",
      "menu.sub": "A complete Levantine table, fired by charcoal — from first bites to grills to sweets, everything we serve is halal.",
      "menu.search": "Search the menu…",
      "menu.empty": "No matches — try another word.",
      "legend.veg": "Vegetarian",
      "legend.spicy": "Contains chili",
      "legend.nuts": "Contains nuts",
      "legend.sig": "Chef's signature",
      "lb.close": "Close"
    },
    zh: {
      "nav.home": "首页",
      "nav.menu": "菜单",
      "nav.story": "关于我们",
      "nav.reserve": "预订",
      "nav.contact": "联系",
      "cta.reserve": "预订餐位",
      "cta.menu": "浏览菜单",
      "cta.fullmenu": "浏览完整菜单",
      "hero.kicker": "欧坦餐厅 · 广州",
      "hero.title": "黎凡特之魂",
      "hero.sub": "橡木炭火。大马士革香料。一桌难忘。",
      "ab.call": "致电",
      "sig.eyebrow": "招牌菜",
      "sig.title": "来自欧坦的炉火",
      "sig.link": "在菜单中查看",
      "fire.quote": "炭火从不着急——我们也是。",
      "fire.who": "欧坦 · 黎凡特之魂",
      "story.eyebrow": "我们的故事",
      "story.title": "传统与创新在此相遇",
      "story.body": "每道菜，始于精选的食材与耐心驯服的炉火；每位客人，都被当作家人款待。这就是黎凡特——在广州中心。",
      "story.f1n": "炭火",
      "story.f1l": "每日现烤",
      "story.f2n": "黎凡特",
      "story.f2l": "世代传承食谱",
      "story.f3n": "100% 清真",
      "story.f3l": "无一例外",
      "cats.eyebrow": "菜单",
      "cats.title": "尝遍整个黎凡特",
      "cats.dishes": "道菜",
      "cinema.eyebrow": "欧坦影像",
      "cinema.title": "炉火之间的画面",
      "cinema.c1": "炭火之上",
      "cinema.c2": "梅泽餐桌",
      "cinema.c3": "烤炉青烟",
      "cinema.c4": "甜蜜收尾",
      "res.eyebrow": "预订",
      "res.title": "今晚的餐位正等着您",
      "res.sub": "填写表单预订，或直接致电——一小时内确认。",
      "res.name": "姓名",
      "res.phone": "电话",
      "res.date": "日期",
      "res.time": "时间",
      "res.guests": "人数",
      "res.note": "备注（可选）",
      "res.submit": "提交预订申请",
      "res.notetext": "提交后将打开您的邮件应用确认发送——也可直接致电。",
      "res.okbig": "已收到您的预订",
      "res.oktext": "我们将在一小时内确认您的餐位。欢迎光临。",
      "g1": "1位", "g2": "2位", "g3": "3位", "g4": "4位", "g5": "5位", "g6": "6位", "g7": "7位以上 — 私人宴会",
      "foot.tag": "广州的黎凡特之魂——炭火黎凡特料理，发自内心的款待。",
      "foot.visit": "欢迎光临",
      "foot.addr": "广州市荔湾区西湾路149-2号 粤秀财富大厦B2栋",
      "foot.hours": "每日营业 · 8:00 – 20:00",
      "foot.contact": "联系我们",
      "foot.halal": "本店全部菜品清真",
      "foot.rights": "© 2026 欧坦餐厅 — 版权所有",
      "foot.soul": "The Soul of Levant",
      "menu.title": "菜单",
      "menu.sub": "一桌完整的黎凡特盛宴，以炭火烹就——从前菜到烧烤再到甜点，所有菜品均为清真。",
      "menu.search": "搜索菜品…",
      "menu.empty": "未找到菜品，请尝试其他关键词。",
      "legend.veg": "素食",
      "legend.spicy": "含辣椒",
      "legend.nuts": "含坚果",
      "legend.sig": "主厨招牌",
      "lb.close": "关闭"
    }
  };

  var LANGS = ["ar", "en", "zh"];
  var saved = null;
  try { saved = localStorage.getItem("otantik-lang"); } catch (e) {}
  var lang = LANGS.indexOf(saved) > -1 ? saved : "ar";

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.en[key] || key);
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    /* lang switch replaces the split word spans with plain text —
       the gradient must live on the h1 again */
    var heroTitle = document.querySelector(".hero-title");
    if (heroTitle) heroTitle.classList.add("gold-text");
    document.title = document.body.getAttribute("data-page") === "menu"
      ? t("menu.title") + " — Otantik · " + t("foot.soul")
      : "Otantik — " + t("hero.title");
    document.dispatchEvent(new CustomEvent("otantik:lang", { detail: { lang: lang } }));
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }

  window.OTANTIK_I18N = { t: t, get lang() { return lang; } };

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang-switch button");
    if (!b) return;
    lang = b.getAttribute("data-lang");
    try { localStorage.setItem("otantik-lang", lang); } catch (err) {}
    applyLang();
  });

  /* ---------------- header, burger, progress ---------------- */
  var header = document.querySelector(".site-header");
  var progress = document.getElementById("progress");

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  var burger = document.querySelector(".burger");
  var mnav = document.querySelector(".mobile-nav");
  if (burger && mnav) {
    burger.addEventListener("click", function () { mnav.classList.add("open"); });
    mnav.addEventListener("click", function (e) {
      if (e.target.closest("a") || e.target.closest(".close-nav")) mnav.classList.remove("open");
    });
  }

  /* ---------------- motion (Lenis + GSAP) ---------------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var isTouch = window.matchMedia("(pointer: coarse)").matches;

  function initMotion() {
    if (reduced || !window.gsap) return;
    gsap.registerPlugin(ScrollTrigger);

    var lenis = null;
    /* phones get 100% native scrolling — any interference reads as lag */
    if (window.Lenis && !isTouch) {
      lenis = new Lenis({ lerp: 0.16, wheelMultiplier: 1.15, syncTouch: false });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      lenis.on("scroll", ScrollTrigger.update);
      /* pin spacers change page height after Lenis measured it */
      ScrollTrigger.addEventListener("refresh", function () { lenis.resize(); });
      /* lazy images keep growing the page — keep Lenis's height current
         or long jumps clamp to a stale maximum */
      if ("ResizeObserver" in window) {
        new ResizeObserver(function () { lenis.resize(); }).observe(document.body);
      }
      window.OTANTIK_LENIS = lenis;
    }

    /* in-page anchors ride Lenis instead of fighting it */
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a || !lenis) return;
      var el = document.querySelector(a.getAttribute("href"));
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -70, duration: 1.4 });
    });

    /* cinematic hero entrance: word-by-word rise (word-level only —
       letter splitting would break Arabic glyph shaping) */
    var ht = document.querySelector(".hero-title");
    if (ht) {
      var words = ht.textContent.trim().split(/\s+/);
      /* background-clip:text can't paint into inline-block children,
         so each word carries its own gold gradient */
      ht.classList.remove("gold-text");
      ht.innerHTML = words.map(function (w) {
        return '<span class="hw gold-text" style="display:inline-block">' + w + "</span>";
      }).join(" ");
      gsap.fromTo(".hero-title .hw",
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 1.25, ease: "power3.out", stagger: 0.14, delay: 0.25 });
    }

    document.querySelectorAll(".rv").forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, y: 34 },
        {
          opacity: 1, y: 0, duration: 1.05, ease: "power3.out",
          delay: parseFloat(el.getAttribute("data-rv-delay") || 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
    });

    /* scroll-scrubbed transforms are the #1 cause of mobile scroll jank — desktop only */
    if (!isTouch) {
      document.querySelectorAll("[data-parallax]").forEach(function (el) {
        var amt = parseFloat(el.getAttribute("data-parallax")) || 8;
        gsap.fromTo(el, { yPercent: -amt }, {
          yPercent: amt, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true }
        });
      });
    }

    ScrollTrigger.refresh();
  }

  /* ---------------- hero embers ---------------- */
  function initEmbers() {
    var cv = document.getElementById("embers");
    if (!cv || reduced) return;
    var ctx = cv.getContext("2d");
    var W, H, parts = [];
    function size() {
      W = cv.width = cv.offsetWidth * (window.devicePixelRatio > 1 ? 1.5 : 1);
      H = cv.height = cv.offsetHeight * (window.devicePixelRatio > 1 ? 1.5 : 1);
    }
    size();
    window.addEventListener("resize", size);
    var COUNT = isTouch ? 18 : 42; /* lighter particle load on phone GPUs */
    for (var i = 0; i < COUNT; i++) {
      parts.push({
        x: Math.random(), y: Math.random(),
        r: 0.6 + Math.random() * 1.7,
        vy: 0.0006 + Math.random() * 0.0016,
        vx: (Math.random() - 0.5) * 0.0005,
        tw: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.6 ? "200,155,90" : "217,108,44"
      });
    }
    var running = true;
    document.addEventListener("visibilitychange", function () { running = !document.hidden; });
    (function loop() {
      requestAnimationFrame(loop);
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.y -= p.vy; p.x += p.vx + Math.sin(p.tw) * 0.0003; p.tw += 0.02;
        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
        var a = 0.14 + 0.5 * Math.abs(Math.sin(p.tw));
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.hue + "," + a.toFixed(2) + ")";
        ctx.fill();
      }
    })();
  }

  /* ---------------- reservation form ---------------- */
  function initReserve() {
    var form = document.getElementById("res-form");
    if (!form) return;
    var d = form.querySelector('input[type="date"]');
    if (d) d.min = new Date().toISOString().split("T")[0];
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var lines = [
        "Reservation request — Otantik",
        "Name: " + fd.get("name"),
        "Phone: " + fd.get("phone"),
        "Date: " + fd.get("date") + " " + fd.get("time"),
        "Guests: " + fd.get("guests"),
        fd.get("note") ? "Note: " + fd.get("note") : ""
      ].filter(Boolean).join("\n");
      var href = "mailto:info@otantikrestaurant.com?subject=" +
        encodeURIComponent("Reservation — " + fd.get("name") + " — " + fd.get("date")) +
        "&body=" + encodeURIComponent(lines);
      form.querySelector(".form-fields").style.display = "none";
      form.querySelector(".form-success").classList.add("show");
      window.location.href = href;
    });
  }

  /* ---------------- video power management ----------------
     autoplaying clips off-screen cost GPU and make scrolling stutter */
  function initVideoPause() {
    var vids = document.querySelectorAll("video");
    if (!("IntersectionObserver" in window) || !vids.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { rootMargin: "160px" });
    vids.forEach(function (v) { io.observe(v); });
  }

  /* ---------------- touch glow + ripple (food reacts to the finger) ----------------
     the bright spot chases the finger with a springy lag, and every press
     sends a warm pulse ring through the image */
  function initGlow() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function animateGlow(el) {
      if (el._glowRaf) return;
      var step = function () {
        el._gx += (el._tx - el._gx) * 0.16;
        el._gy += (el._ty - el._gy) * 0.16;
        el.style.setProperty("--gx", el._gx.toFixed(2) + "%");
        el.style.setProperty("--gy", el._gy.toFixed(2) + "%");
        var settled = Math.abs(el._tx - el._gx) < 0.2 && Math.abs(el._ty - el._gy) < 0.2;
        if (settled && !el.classList.contains("glowing")) { el._glowRaf = null; return; }
        el._glowRaf = requestAnimationFrame(step);
      };
      el._glowRaf = requestAnimationFrame(step);
    }

    function setGlow(el, cx, cy) {
      var r = el.getBoundingClientRect();
      var x = ((cx - r.left) / r.width) * 100;
      var y = ((cy - r.top) / r.height) * 100;
      if (el._gx === undefined) { el._gx = x; el._gy = y; }
      el._tx = x; el._ty = y;
      el.classList.add("glowing");
      animateGlow(el);
      clearTimeout(el._glowT);
      el._glowT = setTimeout(function () { el.classList.remove("glowing"); }, 900);
    }

    function ripple(el, cx, cy) {
      var r = el.getBoundingClientRect();
      var dot = document.createElement("span");
      dot.className = "ripple";
      dot.style.left = (cx - r.left) + "px";
      dot.style.top = (cy - r.top) + "px";
      el.appendChild(dot);
      dot.addEventListener("animationend", function () { dot.remove(); });
    }

    document.addEventListener("pointermove", function (e) {
      var el = e.target.closest ? e.target.closest(".glow") : null;
      if (el) setGlow(el, e.clientX, e.clientY);
    }, { passive: true });
    document.addEventListener("pointerdown", function (e) {
      var el = e.target.closest ? e.target.closest(".glow") : null;
      if (el) { setGlow(el, e.clientX, e.clientY); ripple(el, e.clientX, e.clientY); }
    }, { passive: true });
    /* touchmove keeps firing while the page scrolls under the finger */
    document.addEventListener("touchmove", function (e) {
      var t = e.touches[0];
      if (!t) return;
      var under = document.elementFromPoint(t.clientX, t.clientY);
      var el = under && under.closest ? under.closest(".glow") : null;
      if (el) setGlow(el, t.clientX, t.clientY);
    }, { passive: true });
    document.addEventListener("pointerleave", function (e) {
      var el = e.target.closest ? e.target.closest(".glow") : null;
      if (el) el.classList.remove("glowing");
    }, true);
  }

  /* ---------------- full-screen dish viewer ---------------- */
  window.OTANTIK_FULLVIEW = function (src, caption) {
    var fv = document.getElementById("fullview");
    if (!fv) {
      fv = document.createElement("div");
      fv.id = "fullview";
      fv.innerHTML = '<button class="fv-close" aria-label="Close">✕</button><img alt=""><div class="fv-cap"></div>';
      document.body.appendChild(fv);
      var close = function () {
        fv.classList.remove("open");
        document.body.style.overflow = fv._prevOverflow || "";
      };
      fv.addEventListener("click", close);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && fv.classList.contains("open")) close();
      });
    }
    fv.querySelector("img").src = src;
    fv.querySelector("img").alt = caption || "";
    fv.querySelector(".fv-cap").textContent = caption || "";
    fv._prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    fv.classList.add("open");
  };

  /* ---------------- cinematic veil (hard cut through black) ---------------- */
  var veil = null;
  function ensureVeil() {
    if (!veil) {
      veil = document.createElement("div");
      veil.id = "veil";
      document.body.appendChild(veil);
    }
    return veil;
  }
  window.OTANTIK_CUT = function (jumpFn) {
    var v = ensureVeil();
    v.classList.add("on");
    setTimeout(function () {
      jumpFn();
      requestAnimationFrame(function () {
        setTimeout(function () { v.classList.remove("on"); }, 120);
      });
    }, 360);
  };

  /* ---------------- boot ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang();
    onScroll();
    initMotion();
    initEmbers();
    initReserve();
    initVideoPause();
    initGlow();
    var grain = document.createElement("div");
    grain.id = "grain";
    document.body.appendChild(grain);
  });
})();
