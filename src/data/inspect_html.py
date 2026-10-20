import re

try:
    with open("C:/Users/ADMIN/.gemini/antigravity/brain/73d2c859-9225-4ed3-bb76-2e807f1a9aa2/.system_generated/steps/36/content.md", "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"Content length: {len(content)}")
    
    # Search for all image extensions
    img_urls = re.findall(r'https?://[a-zA-Z0-9\.\-_/]+?\.(?:jpg|jpeg|png|webp|gif)', content, re.IGNORECASE)
    print(f"Found {len(img_urls)} image URLs:")
    for url in set(img_urls):
        print(url)
except Exception as e:
    print(f"Error: {e}")
