import pickle
import requests

def save_cookies(requests_cookiejar, filename):
    with open(filename, 'wb') as f:
        pickle.dump(requests_cookiejar, f)

def load_cookies(filename):
    with open(filename, 'rb') as f:
        return pickle.load(f)

#save cookies
r = requests.get("https://608ef55a90343b13a09608c42e6b0645.ey.sandcats.io/_sandstorm-init?sessionid=fa11b93ab59383d12f5fb905175e95b0467adc4dbbc2033b499df99fdd515caf&path=/home")
save_cookies(r.cookies, "cookie.txt")
for cookie in r.cookies:
    print cookie.name, cookie.value, cookie.domain #etc etc

