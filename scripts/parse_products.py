import json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

p1 = json.load(open("data/products-p1.json", encoding="utf-8"))
p2 = json.load(open("data/products-p2.json", encoding="utf-8"))
items = p1 + p2
print("total products:", len(items))
print("keys:", sorted(items[0].keys()))
print("categories field sample:", json.dumps(items[0].get("categories"), ensure_ascii=False))
print("price sample:", items[0]["prices"]["price"], "minor unit:", items[0]["prices"]["currency_minor_unit"])
# how many have images
noimg = [i["name"] for i in items if not i.get("images")]
print("items without images:", len(noimg), noimg[:10])
