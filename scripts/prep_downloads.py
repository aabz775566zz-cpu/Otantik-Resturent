import json, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

items = json.load(open("data/extract.json", encoding="utf-8-sig"))
# download list: slug<TAB>url
with open("data/img-downloads.tsv", "w", encoding="utf-8") as f:
    n = 0
    for it in items:
        if it.get("img"):
            ext = it["img"].rsplit(".", 1)[-1].split("?")[0].lower()
            if ext not in ("jpg", "jpeg", "png", "webp"): ext = "jpg"
            f.write(f"{it['slug']}.{ext}\t{it['img']}\n")
            n += 1
print("download list:", n, "images")

# compact authoring reference: cat | slug | name | price | desc
with open("data/compact.txt", "w", encoding="utf-8") as f:
    bycat = {}
    for it in items:
        cat = it["cats"][0] if it["cats"] else "uncat"
        bycat.setdefault(cat, []).append(it)
    for cat in sorted(bycat):
        f.write(f"\n## {cat} ({len(bycat[cat])})\n")
        for it in sorted(bycat[cat], key=lambda x: x["name"].lower()):
            desc = (it["desc"] or "").replace("\n", " ").strip()
            img = "IMG" if it.get("img") else "NOIMG"
            f.write(f"{it['slug']} | {it['name']} | {it['price']:.0f} | {img} | {desc}\n")
print("compact reference written")
noimg = [it["slug"] for it in items if not it.get("img")]
print("no image:", len(noimg), noimg)
