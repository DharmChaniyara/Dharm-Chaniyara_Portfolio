import urllib.request
import json
import base64

headers = {'User-Agent': 'Mozilla/5.0'}

def get_repo_details(owner, repo):
    print(f"\n==================== {owner}/{repo} ====================")
    # Get repo info
    try:
        req = urllib.request.Request(f"https://api.github.com/repos/{owner}/{repo}", headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            print("Description:", data.get('description'))
            print("Homepage:", data.get('homepage'))
            print("Language:", data.get('language'))
    except Exception as e:
        print("Repo info error:", e)

    # Get languages
    try:
        req = urllib.request.Request(f"https://api.github.com/repos/{owner}/{repo}/languages", headers=headers)
        with urllib.request.urlopen(req) as resp:
            langs = json.loads(resp.read().decode('utf-8'))
            print("Languages:", langs)
    except Exception as e:
        pass

    # Get file list (root)
    try:
        req = urllib.request.Request(f"https://api.github.com/repos/{owner}/{repo}/contents", headers=headers)
        with urllib.request.urlopen(req) as resp:
            contents = json.loads(resp.read().decode('utf-8'))
            print("Root files:", [c['name'] for c in contents])
    except Exception as e:
        print("Contents error:", e)

    # Get README
    try:
        req = urllib.request.Request(f"https://api.github.com/repos/{owner}/{repo}/readme", headers=headers)
        with urllib.request.urlopen(req) as resp:
            readme_data = json.loads(resp.read().decode('utf-8'))
            content = base64.b64decode(readme_data['content']).decode('utf-8', errors='ignore')
            print("--- README (first 600 chars) ---")
            print(content[:600])
    except Exception as e:
        print("No README found or error:", e)

if __name__ == '__main__':
    repos = [
        ('DharmChaniyara', 'CODE-BUSTERS-'),
        ('DharmChaniyara', 'Fake-Job-Offer-Detector-'),
        ('DharmChaniyara', 'tinkering-mentoring'),
        ('DharmChaniyara', 'wind-turbine-sim'),
        ('DharmChaniyara', 'DevFest'),
        ('skyuchiha69', 'Campus-copilot-ieee')
    ]
    for owner, repo in repos:
        get_repo_details(owner, repo)
