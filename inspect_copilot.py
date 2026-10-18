import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0'}

def inspect_campus_copilot():
    # commits
    url = 'https://api.github.com/repos/skyuchiha69/Campus-copilot-ieee/commits?per_page=50'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            commits = json.loads(resp.read().decode('utf-8'))
            print(f"=== CAMPUS COPILOT COMMITS ({len(commits)}) ===")
            for c in commits:
                commit = c['commit']
                author = commit.get('author', {})
                print(f"[{c['sha'][:7]}] {author.get('name')} <{author.get('email')}>: {commit.get('message').splitlines()[0]}")
    except Exception as e:
        print("Commits error:", e)

    # get architecture md
    url_arch = 'https://raw.githubusercontent.com/skyuchiha69/Campus-copilot-ieee/main/campus_copilot_architecture.md'
    req_arch = urllib.request.Request(url_arch, headers=headers)
    try:
        with urllib.request.urlopen(req_arch) as resp:
            arch = resp.read().decode('utf-8', errors='ignore')
            print("\n=== CAMPUS COPILOT ARCHITECTURE (sample) ===")
            print(arch[:1000])
    except Exception as e:
        print("Arch error:", e)

if __name__ == '__main__':
    inspect_campus_copilot()
