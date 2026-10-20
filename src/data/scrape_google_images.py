import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Referer': 'https://www.google.com/'
}

# Google Images search url for "Ram Pre School Alandur Chennai"
search_url = "https://www.google.com/search?q=Ram+Pre+School+Alandur+Chennai&tbm=isch"

print(f"Fetching Google Images: {search_url}...")
try:
    req = urllib.request.Request(search_url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as response:
        html = response.read().decode('utf-8', errors='ignore')
        print(f"Success! HTML length: {len(html)}")
        
        # Look for image URLs. In Google Images, they are typically formatted as:
        # "https://encrypted-tbn0.gstatic.com/images?q=tbn:..."
        # or other source image URLs in the JSON data block (like AF_initDataCallback)
        tbn_images = re.findall(r'https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[a-zA-Z0-9\-_]+', html)
        print(f"Found {len(tbn_images)} thumbnail images.")
        
        # We can also search for direct source images which are usually inside JSON lists.
        # e.g., ["http://...", width, height]
        source_images = re.findall(r'\"(https?://[^\"]+?\.(?:jpg|jpeg|png|gif))\"', html)
        print(f"Found {len(source_images)} direct source images.")
        
        unique_tbn = list(set(tbn_images))
        unique_src = list(set(source_images))
        
        print("\nSample Thumbnail URLs:")
        for img in unique_tbn[:10]:
            print(img)
            
        print("\nSample Source Image URLs:")
        for img in unique_src[:10]:
            print(img)
            
        with open("google_images.json", "w") as f:
            json.dump({
                "thumbnails": unique_tbn,
                "sources": unique_src
            }, f, indent=2)
            
except Exception as e:
    print(f"Error: {e}")
