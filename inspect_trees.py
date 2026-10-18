import urllib.request
import json
import base64

headers = {'User-Agent': 'Mozilla/5.0'}

def inspect_tree(owner, repo, path=''):
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            items = json.loads(resp.read().decode('utf-8'))
            for item in items:
                print(f"[{item['type']}] {item['path']}")
                if item['type'] == 'dir' and path == '':
                    # inspect 1 level down
                    url_sub = f"https://api.github.com/repos/{owner}/{repo}/contents/{item['path']}"
                    req_sub = urllib.request.Request(url_sub, headers=headers)
                    try:
                        with urllib.request.urlopen(req_sub) as rsub:
                            sub_items = json.loads(rsub.read().decode('utf-8'))
                            for s in sub_items:
                                print(f"    [{s['type']}] {s['path']}")
                    except Exception as e:
                        pass
    except Exception as e:
        print(f"Error inspecting {owner}/{repo}/{path}: {e}")

print("=== Fake-Job-Offer-Detector- Tree ===")
inspect_tree('DharmChaniyara', 'Fake-Job-Offer-Detector-')

print("\n=== tinkering-mentoring Tree ===")
inspect_tree('DharmChaniyara', 'tinkering-mentoring')
