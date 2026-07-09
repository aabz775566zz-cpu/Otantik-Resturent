"""One-time: download Google Fonts woff2 files and emit a local @font-face CSS.
Chinese text intentionally uses system font stacks (PingFang/YaHei/Songti) - no 8MB downloads."""
import re, os, urllib.request, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

CSS_URL = ("https://fonts.googleapis.com/css2?"
           "family=Amiri:ital,wght@0,400;0,700;1,400"
           "&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500"
           "&family=IBM+Plex+Sans+Arabic:wght@400;500;600"
           "&family=Inter:wght@400;500;600"
           "&family=Marcellus"
           "&family=Reem+Kufi:wght@400;500;600;700&display=swap")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

req = urllib.request.Request(CSS_URL, headers={"User-Agent": UA})
css = urllib.request.urlopen(req, timeout=60).read().decode("utf-8")

os.makedirs("assets/fonts", exist_ok=True)
urls = sorted(set(re.findall(r"url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)", css)))
print("woff2 files:", len(urls))
for u in urls:
    fname = u.split("/")[-1]
    # prefix with family dir segment to avoid collisions
    fam = u.split("/s/")[1].split("/")[0]
    local = f"assets/fonts/{fam}-{fname}"
    if not os.path.exists(local):
        r = urllib.request.Request(u, headers={"User-Agent": UA})
        data = urllib.request.urlopen(r, timeout=60).read()
        open(local, "wb").write(data)
    css = css.replace(u, f"../assets/fonts/{fam}-{fname}")

os.makedirs("css", exist_ok=True)
with open("css/fonts.css", "w", encoding="utf-8") as f:
    f.write(css)
print("wrote css/fonts.css with local URLs")
