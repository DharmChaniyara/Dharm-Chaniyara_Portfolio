import urllib.request
import json
import sys

headers = {'User-Agent': 'Mozilla/5.0'}

def get_user_info():
    req = urllib.request.Request('https://api.github.com/users/DharmChaniyara', headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            print("=== USER INFO ===")
            for k in ['login', 'name', 'bio', 'location', 'company', 'blog', 'twitter_username', 'public_repos', 'public_gists', 'followers', 'following', 'created_at', 'updated_at']:
                print(f"{k}: {data.get(k)}")
    except Exception as e:
        print("Error getting user info:", e)

def get_repos():
    req = urllib.request.Request('https://api.github.com/users/DharmChaniyara/repos?sort=updated&per_page=100', headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            repos = json.loads(resp.read().decode())
            print(f"\n=== REPOSITORIES ({len(repos)}) ===")
            for r in repos:
                print("--------------------------------------------------")
                print(f"Name: {r['name']}")
                print(f"Description: {r['description']}")
                print(f"Language: {r['language']}")
                print(f"Fork: {r['fork']}")
                print(f"Stars: {r['stargazers_count']}, Forks: {r['forks_count']}")
                print(f"Topics: {r.get('topics', [])}")
                print(f"Homepage: {r.get('homepage')}")
                print(f"URL: {r['html_url']}")
                print(f"Created: {r['created_at']}, Updated: {r['updated_at']}")
    except Exception as e:
        print("Error getting repos:", e)

def get_campus_copilot():
    req = urllib.request.Request('https://api.github.com/repos/skyuchiha69/Campus-copilot-ieee', headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            repo = json.loads(resp.read().decode())
            print("\n=== CAMPUS COPILOT REPO ===")
            print(f"Name: {repo['name']}")
            print(f"Description: {repo['description']}")
            print(f"Language: {repo['language']}")
            print(f"Topics: {repo.get('topics', [])}")
            print(f"Homepage: {repo.get('homepage')}")
            print(f"URL: {repo['html_url']}")
    except Exception as e:
        print("Error getting campus copilot:", e)

    # contributors
    req_contrib = urllib.request.Request('https://api.github.com/repos/skyuchiha69/Campus-copilot-ieee/contributors', headers=headers)
    try:
        with urllib.request.urlopen(req_contrib) as resp:
            contribs = json.loads(resp.read().decode())
            print("Contributors:")
            for c in contribs:
                print(f" - {c.get('login')}: {c.get('contributions')} contributions")
    except Exception as e:
        print("Error getting contributors:", e)

    # issues
    req_issues = urllib.request.Request('https://api.github.com/repos/skyuchiha69/Campus-copilot-ieee/issues?state=all', headers=headers)
    try:
        with urllib.request.urlopen(req_issues) as resp:
            issues = json.loads(resp.read().decode())
            print(f"Issues ({len(issues)}):")
            for iss in issues:
                print(f" - #{iss.get('number')}: {iss.get('title')} (by {iss.get('user', {}).get('login')})")
    except Exception as e:
        print("Error getting issues:", e)

if __name__ == '__main__':
    get_user_info()
    get_repos()
    get_campus_copilot()
