import React from 'react';
import { GithubRepo } from '../../types/github';
import GlassCard from '../../components/ui/GlassCard';
import { Star, GitFork, Clock } from 'lucide-react';

interface RepoListProps {
  repos: GithubRepo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-nord-6">Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <GlassCard key={repo.id} className="p-6 hover:bg-white/5 transition-colors">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-nord-8 hover:text-nord-9">
                {repo.name}
              </h3>
              
              {repo.description && (
                <p className="text-nord-4">{repo.description}</p>
              )}
              
              <div className="flex items-center space-x-6 text-sm">
                {repo.language && (
                  <span className="text-nord-4">
                    <span className="inline-block w-3 h-3 rounded-full bg-nord-8 mr-2" />
                    {repo.language}
                  </span>
                )}
                
                <div className="flex items-center space-x-1 text-nord-4">
                  <Star className="w-4 h-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                
                <div className="flex items-center space-x-1 text-nord-4">
                  <GitFork className="w-4 h-4" />
                  <span>{repo.forks_count}</span>
                </div>
                
                <div className="flex items-center space-x-1 text-nord-4">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </a>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default RepoList;