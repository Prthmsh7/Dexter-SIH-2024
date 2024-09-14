import requests
import json

def get_user_repos (username):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    return response.json()

def get_repo_languages(repo):
    url = repo["languages_url"]
    response = requests.get(url)
    return response.json()

def calculate_language_percentage(languages):
    total_lines = sum(languages.values())
    percentages = {}
    for language, lines in languages.items():
        percentage = (lines / total_lines) * 100
        percentages[language] = percentage
    return percentages

def main():
    username = "00Manas-Singh00"  # Replace with the desired GitHub username
    repos = get_user_repos(username)
    results = {}
    for repo in repos:
        languages = get_repo_languages(repo)
        percentages = calculate_language_percentage(languages)
        results[repo["name"]] = percentages
    print(json.dumps(results, indent=4))

if __name__ == "__main__":
    main()