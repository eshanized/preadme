import { GithubProfile } from '../types/github';

const GITHUB_API = 'https://api.github.com';

export async function fetchGithubProfile(username: string): Promise<GithubProfile> {
  const response = await fetch(`${GITHUB_API}/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub profile');
  }
  return response.json();
}

export async function fetchGithubRepos(username: string) {
  const response = await fetch(`${GITHUB_API}/users/${username}/repos?sort=updated`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  return response.json();
}