import json, os, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

CATS = [
    {"id": "breakfast", "name": {"ar": "الفطور", "en": "Breakfast", "zh": "早餐"},
     "line": {"ar": "بداية شامية للصباح", "en": "A Levantine start to the morning", "zh": "黎凡特式晨间序曲"}},
    {"id": "cold", "name": {"ar": "مقبلات باردة", "en": "Cold Mezze", "zh": "冷盘前菜"},
     "line": {"ar": "من قلب المطبخ الشامي", "en": "From the heart of the Levant table", "zh": "黎凡特餐桌的经典冷盘"}},
    {"id": "hot", "name": {"ar": "مقبلات ساخنة", "en": "Hot Mezze", "zh": "热盘前菜"},
     "line": {"ar": "تقدم ساخنة من المقلاة والفرن", "en": "Straight from the pan and the oven", "zh": "锅气与炉火的热度"}},
    {"id": "sides", "name": {"ar": "مقبلات جانبية", "en": "Sides & Bites", "zh": "小食配菜"},
     "line": {"ar": "لقيمات تشارك على الطاولة", "en": "Small plates made for sharing", "zh": "适合分享的小食"}},
    {"id": "salads", "name": {"ar": "السلطات", "en": "Salads", "zh": "沙拉"},
     "line": {"ar": "طازجة من السوق كل صباح", "en": "Fresh from the market every morning", "zh": "每日清晨新鲜采购"}},
    {"id": "manakish", "name": {"ar": "مناقيش وفطائر", "en": "Manakish & Pies", "zh": "黎凡特烤饼"},
     "line": {"ar": "من فرن الحطب مباشرة", "en": "Straight from the wood-fired oven", "zh": "柴火烤炉现烤出炉"}},
    {"id": "grill", "name": {"ar": "المشاوي", "en": "The Grill", "zh": "炭火烧烤"},
     "line": {"ar": "على فحم البلوط، كما في الشام", "en": "Over oak charcoal, the Damascus way", "zh": "橡木炭火，大马士革风范"}},
    {"id": "beef", "name": {"ar": "أطباق اللحم", "en": "Beef Mains", "zh": "牛肉主菜"},
     "line": {"ar": "ستيك وأطباق لحم فاخرة", "en": "Steaks and slow-finished beef", "zh": "精选牛排与炖牛肉"}},
    {"id": "chicken", "name": {"ar": "أطباق الدجاج", "en": "Chicken Mains", "zh": "鸡肉主菜"},
     "line": {"ar": "وصفات دجاج من شرق وغرب", "en": "Chicken, east and west", "zh": "东西合璧的鸡肉料理"}},
    {"id": "fish", "name": {"ar": "الأسماك وثمار البحر", "en": "Fish & Seafood", "zh": "海鲜主菜"},
     "line": {"ar": "من البحر إلى النار", "en": "From the sea to the fire", "zh": "从海洋到炉火"}},
    {"id": "pasta", "name": {"ar": "باستا وريزوتو", "en": "Pasta & Risotto", "zh": "意面烩饭"},
     "line": {"ar": "إيطاليا بلمسة شرقية", "en": "Italy with a Levantine touch", "zh": "意式经典，东方点缀"}},
    {"id": "pizza", "name": {"ar": "بيتزا", "en": "Pizza", "zh": "披萨"},
     "line": {"ar": "عجينة طازجة وفرن حجري", "en": "Fresh dough, stone oven", "zh": "现制面团石炉烤制"}},
    {"id": "burgers", "name": {"ar": "برغر وساندويتش", "en": "Burgers & Sandwiches", "zh": "汉堡三明治"},
     "line": {"ar": "على طريقة أوتانتيك", "en": "Done the Otantik way", "zh": "欧坦独家做法"}},
    {"id": "sweets", "name": {"ar": "حلويات شرقية", "en": "Levantine Sweets", "zh": "黎凡特甜点"},
     "line": {"ar": "بفستق حلبي وقطر ذهبي", "en": "Aleppo pistachio and golden syrup", "zh": "阿勒颇开心果与金色糖浆"}},
]

items = []
for i in (1, 2, 3, 4):
    with open(f"data/menu-chunk{i}.json", encoding="utf-8") as f:
        chunk = json.load(f)
        items += chunk
        print(f"chunk{i}: {len(chunk)} items OK")

print("total:", len(items))

# validations
slugs = [it["slug"] for it in items]
assert len(slugs) == len(set(slugs)), "duplicate slugs!"
catids = {c["id"] for c in CATS}
missing_imgs, bad_cats = [], []
for it in items:
    if it["cat"] not in catids:
        bad_cats.append(it["slug"])
    p = f"assets/img/menu/{it['slug']}.jpg"
    if not os.path.exists(p):
        missing_imgs.append(it["slug"])
    it["img"] = p
    for lang in ("ar", "en", "zh"):
        assert it["name"][lang].strip(), f"empty name {it['slug']} {lang}"
        assert it["desc"][lang].strip(), f"empty desc {it['slug']} {lang}"

print("bad cats:", bad_cats)
print("missing images:", missing_imgs)

# per-category counts
from collections import Counter
cnt = Counter(it["cat"] for it in items)
for c in CATS:
    print(f"  {c['id']}: {cnt[c['id']]}")

menu = {"categories": CATS, "items": items}
with open("data/menu.json", "w", encoding="utf-8") as f:
    json.dump(menu, f, ensure_ascii=False, indent=0)

os.makedirs("js", exist_ok=True)
with open("js/menu-data.js", "w", encoding="utf-8") as f:
    f.write("// Auto-generated from data/menu.json — edit data/menu-chunk*.json and re-run scripts/merge_menu.py\n")
    f.write("window.OTANTIK_MENU = ")
    json.dump(menu, f, ensure_ascii=False, separators=(",", ":"))
    f.write(";\n")
print("wrote data/menu.json and js/menu-data.js")
