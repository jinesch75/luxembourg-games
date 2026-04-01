import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json

BASE_URL = "https://www.visitluxembourg.com"
START_URL = "https://www.visitluxembourg.com/en"

headers = {
    "User-Agent": "Mozilla/5.0"
}

visited = set()
to_visit = [START_URL]
all_pages = []

while to_visit:
    url = to_visit.pop(0)

    if url in visited:
        continue

    print(f"Scraping: {url}")
    visited.add(url)

    try:
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, "html.parser")

        # Extract useful visible content
        page_text = []
        for tag in soup.find_all(["h1", "h2", "h3", "h4", "p", "li"]):
            text = tag.get_text(strip=True)
            if text:
                page_text.append(text)

        all_pages.append({
            "url": url,
            "content": "\n".join(page_text)
        })

        # Discover internal links
        for a in soup.find_all("a", href=True):
            href = a["href"]
            full_url = urljoin(BASE_URL, href)

            parsed = urlparse(full_url)

            # Keep only Visit Luxembourg internal English pages
            if (
                parsed.netloc == "www.visitluxembourg.com"
                and full_url not in visited
            ):
                to_visit.append(full_url)

        time.sleep(1)

    except Exception as e:
        print(f"Error scraping {url}: {e}")

# Save as JSON
with open("visitluxembourg_content.json", "w", encoding="utf-8") as f:
    json.dump(all_pages, f, ensure_ascii=False, indent=2)

print("Done.")