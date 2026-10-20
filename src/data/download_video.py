import urllib.request
import os

os.makedirs("src/assets/videos", exist_ok=True)

# A beautiful preschool video from Pexels (hosted on Vimeo CDN)
video_url = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b18f9064d519ae1262d5a62d7&profile_id=139"
output_path = "src/assets/videos/school_tour.mp4"

print(f"Downloading video from {video_url}...")
try:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    req = urllib.request.Request(video_url, headers=headers)
    with urllib.request.urlopen(req) as response, open(output_path, 'wb') as out_file:
        data = response.read()
        out_file.write(data)
        print(f"Success! Saved video to {output_path} ({len(data)} bytes)")
except Exception as e:
    print(f"Error downloading video: {e}")
