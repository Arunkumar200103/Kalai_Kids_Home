import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Referer': 'https://www.google.com/'
}

maps_photo_url = "https://www.google.com/maps/place/Ram+Pre+School/@12.9972184,80.2000507,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDRwP6eugE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWlCQyr414AUjIsqqmtV4OLLhNHjiFQeNYF3fDYoJQUsxg3TvfeCJgwHqaD9xKhr_eDIgm7enOqvdNsYJDeC5YBQkn__5TwjN_3q9CVhPjQZzdV-t1dfJ9PnbAqTlowIJgs2S2r_4A%3Dw397-h298-k-no!7i4032!8i3024!4m9!3m8!1s0x3a52675af4aa5a1f:0xd327e47d63ed73fd!8m2!3d12.9973355!4d80.2000377!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tdg1n37?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D"

print(f"Fetching user Google Maps URL...")
try:
    req = urllib.request.Request(maps_photo_url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as response:
        html = response.read().decode('utf-8', errors='ignore')
        print(f"Success! HTML length: {len(html)}")
        
        # Extract matches containing googleusercontent.com
        # Find urls starting with lh3, lh4, lh5, lh6, or dynamic googleusercontent urls
        images = re.findall(r'https?://[a-zA-Z0-9\.\-_/]+googleusercontent\.com/[a-zA-Z0-9\.\-_/=]+', html)
        print(f"Found {len(images)} potential images.")
        
        unique_images = list(set(images))
        print("Sample image URLs:")
        for img in unique_images[:20]:
            print(img)
            
        with open("user_maps_images.json", "w") as f:
            json.dump(unique_images, f, indent=2)
            
except Exception as e:
    print(f"Error: {e}")
