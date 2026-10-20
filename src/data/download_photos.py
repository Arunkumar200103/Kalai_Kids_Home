import urllib.request
import re
import urllib.parse
import os

links = [
    "https://maps.app.goo.gl/HUmqXPNgsBEccdE67",
    "https://maps.app.goo.gl/R2sKkFCXYKqNQL1e9",
    "https://maps.app.goo.gl/DN9VHvS8vWHSt4Pd9",
    "https://maps.app.goo.gl/1jouPPhBem2FeVfn7"
]

os.makedirs("src/assets/images", exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for idx, short_url in enumerate(links):
    print(f"\nProcessing: {short_url}")
    try:
        class NoRedirection(urllib.request.HTTPErrorProcessor):
            def http_response(self, request, response):
                return response
            https_response = http_response

        opener = urllib.request.build_opener(NoRedirection)
        req_head = urllib.request.Request(short_url, method='HEAD')
        response_head = opener.open(req_head, timeout=10)
        
        long_url = short_url
        if response_head.status in (301, 302, 303, 307, 308):
            long_url = response_head.getheader('Location')
            print(f"Redirects to: {long_url}")
            
        # The long URL often contains the image URL encoded in the '!6s' parameter
        # Example: !6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1Qip...
        # Or !6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2F...
        match = re.search(r'!6s(https:%2F%2F[a-zA-Z0-9\.\-_]+googleusercontent\.com[^\!]+)', long_url)
        if match:
            img_url = urllib.parse.unquote(match.group(1))
            # ensure it has a large width
            img_url = re.sub(r'=w\d+-h\d+-k-no', '=w1200', img_url)
            print(f"Found image URL: {img_url}")
            
            output_path = f"src/assets/images/school_photo_{idx+1}.jpg"
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response, open(output_path, 'wb') as out_file:
                out_file.write(response.read())
                print(f"Downloaded to {output_path}")
        else:
            print("Could not find image URL in the long URL.")
                
    except Exception as e:
        print(f"Error processing {short_url}: {e}")
