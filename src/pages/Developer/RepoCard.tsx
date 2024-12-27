import React from 'react';
import { GithubRepo } from '../../types/github';
import { Star, GitFork, Clock } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

interface RepoCardProps {
  repo: GithubRepo;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <GlassCard className="p-6 hover:bg-white/5 transition-colors">
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
        
        <div className="flex flex-wrap gap-4 text-sm">
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
  );
};

export default RepoCard;