"""Turn the 4K upscaled lockup into web assets:
- logo-lockup.png  (full lockup, transparent, 1200w)
- logo-mark.png    (geometric mihrab mark only, transparent, 900h)
White artwork: if the upscaler flattened the alpha, rebuild alpha from luminance."""
from PIL import Image

src = Image.open("assets/img/logo-4k-raw.png")
print("mode:", src.mode, "size:", src.size)

rgba = src.convert("RGBA")
# sample corners to see what the upscaler put behind the art
corners = [rgba.getpixel(p) for p in [(2, 2), (rgba.width - 3, 2), (2, rgba.height - 3)]]
print("corners:", corners)

has_real_alpha = any(px[3] < 250 for px in corners)
if not has_real_alpha:
    # flattened. background is black (white art) -> alpha from luminance
    g = rgba.convert("L")
    out = Image.new("RGBA", rgba.size, (255, 255, 255, 0))
    white = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
    out = Image.composite(white, out, g)  # luminance as alpha mask
    out.putalpha(g)
    rgba = out
    print("alpha rebuilt from luminance")

# trim empty border
bbox = rgba.getbbox()
rgba = rgba.crop(bbox)
print("trimmed:", rgba.size)

w, h = rgba.size
lockup = rgba.resize((1200, int(h * 1200 / w)), Image.LANCZOS)
lockup.save("assets/img/logo-lockup.png", optimize=True)
print("lockup saved:", lockup.size)

# the mark occupies the left ~36% of the lockup, full height
mark = rgba.crop((0, 0, int(w * 0.375), h))
mb = mark.getbbox()
mark = mark.crop(mb)
mh = 900
mark = mark.resize((int(mark.width * mh / mark.height), mh), Image.LANCZOS)
mark.save("assets/img/logo-mark.png", optimize=True)
print("mark saved:", mark.size)

# dark previews for inspection
for name in ("logo-lockup", "logo-mark"):
    img = Image.open(f"assets/img/{name}.png").convert("RGBA")
    bg = Image.new("RGBA", img.size, (14, 12, 10, 255))
    bg.alpha_composite(img)
    bg.convert("RGB").save(f"assets/img/_preview-{name}.jpg", quality=88)
print("previews written")
