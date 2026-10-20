import urllib.request
import re

links = [
    "https://maps.app.goo.gl/HUmqXPNgsBEccdE67",
    "https://maps.app.goo.gl/R2sKkFCXYKqNQL1e9"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}

for short_url in links:
    print(f"\nProcessing: {short_url}")
    try:
        # First resolve the short URL to get the long URL
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
            
        # Now fetch the long URL HTML
        req = urllib.request.Request(long_url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
            images = re.findall(r'https?://[a-zA-Z0-9\.\-_/]+googleusercontent\.com/[a-zA-Z0-9\.\-_/=]+', html)
            # Filter out generic ones
            images = [img for img in images if 'gps-cs-s' in img or 'p/AF1Qip' in img]
            
            unique_images = list(set(images))
            print(f"Found {len(unique_images)} Google Maps photo URLs:")
            for img in unique_images:
                print(img)
                
    except Exception as e:
        print(f"Error processing {short_url}: {e}")
