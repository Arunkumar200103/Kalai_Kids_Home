import urllib.request
import os

os.makedirs("src/assets/images", exist_ok=True)

image_url = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCQyr414AUjIsqqmtV4OLLhNHjiFQeNYF3fDYoJQUsxg3TvfeCJgwHqaD9xKhr_eDIgm7enOqvdNsYJDeC5YBQkn__5TwjN_3q9CVhPjQZzdV-t1dfJ9PnbAqTlowIJgs2S2r_4A=w1000"
output_path = "src/assets/images/school_front.jpg"

print(f"Downloading {image_url}...")
try:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    req = urllib.request.Request(image_url, headers=headers)
    with urllib.request.urlopen(req) as response, open(output_path, 'wb') as out_file:
        data = response.read()
        out_file.write(data)
        print(f"Success! Saved image to {output_path} ({len(data)} bytes)")
except Exception as e:
    print(f"Error downloading image: {e}")
