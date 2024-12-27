import React, { useEffect, useState } from 'react';
import { fetchGithubProfile, fetchGithubRepos } from '../../services/github';
import { GithubProfile, GithubRepo } from '../../types/github';
import { Loader2 } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import RepoCard from './RepoCard';
import GlassCard from '../../components/ui/GlassCard';

const Developer = () => {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGithubData() {
      try {
        const [profileData, reposData] = await Promise.all([
          fetchGithubProfile('eshanized'),
          fetchGithubRepos('eshanized')
        ]);
        setProfile(profileData);
        setRepos(reposData);
      } catch (err) {
        setError('Failed to load developer information');
      } finally {
        setLoading(false);
      }
    }

    loadGithubData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-nord-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <GlassCard className="p-6 text-center text-nord-11">
        {error}
      </GlassCard>
    );
  }

  return (
    <div className="space-y-8">
      {profile && <ProfileHeader profile={profile} />}
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nord-6">Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developer;