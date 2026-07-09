from PIL import Image

for name in ("logo", "logo-mark-src"):
    img = Image.open(f"assets/img/{name}.png").convert("RGBA")
    bg = Image.new("RGBA", img.size, (14, 12, 10, 255))
    bg.alpha_composite(img)
    big = bg.resize((img.width * 3, img.height * 3), Image.LANCZOS)
    big.convert("RGB").save(f"assets/img/_preview-{name}.jpg", quality=90)
    print(name, img.size)
