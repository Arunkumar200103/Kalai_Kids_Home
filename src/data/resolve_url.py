import urllib.request

short_url = "https://maps.app.goo.gl/HUmqXPNgsBEccdE67"

print(f"Resolving short URL: {short_url}")
try:
    # Use a head request to just get the redirect location without downloading the whole page
    req = urllib.request.Request(short_url, method='HEAD')
    # Prevent urllib from automatically following redirects so we can grab the Location header
    class NoRedirection(urllib.request.HTTPErrorProcessor):
        def http_response(self, request, response):
            return response
        https_response = http_response

    opener = urllib.request.build_opener(NoRedirection)
    response = opener.open(req, timeout=10)
    
    # HTTP 301, 302, 303, 307, 308 means redirect
    if response.status in (301, 302, 303, 307, 308):
        redirect_url = response.getheader('Location')
        print(f"Redirects to: {redirect_url}")
    else:
        print(f"Status {response.status}. Final URL might be: {response.geturl()}")
        
except Exception as e:
    print(f"Error: {e}")
