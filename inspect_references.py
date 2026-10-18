import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def inspect_senior_bundle():
    print("=== SENIOR PORTFOLIO ===")
    url = 'https://shubham-ahir-portfolio-qiqg.vercel.app/assets/index-aOYdq2tp.js'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            text = resp.read().decode('utf-8', errors='ignore')
            # Extract key strings or structure
            print("Bundle length:", len(text))
            sections = re.findall(r'(#about|#experience|#projects|#skills|#achievements|#contact)', text)
            print("Found section anchors:", set(sections))
    except Exception as e:
        print("Senior portfolio error:", e)

def inspect_linkedin():
    print("\n=== LINKEDIN PROFILE ===")
    url = 'https://www.linkedin.com/in/dharm-chaniyara-b51b9137a/'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            print("LinkedIn page length:", len(content))
            # look for title, meta tags
            titles = re.findall(r'<title>(.*?)</title>', content)
            print("Titles:", titles)
            meta_descs = re.findall(r'<meta name="description" content="(.*?)"', content)
            print("Meta description:", meta_descs)
            # look for any JSON-LD
            json_ld = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
            if json_ld:
                for j in json_ld:
                    print("JSON-LD found:", j[:300])
    except Exception as e:
        print("LinkedIn fetch error (standard auth wall expected):", e)

if __name__ == '__main__':
    inspect_senior_bundle()
    inspect_linkedin()
