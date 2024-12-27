import React from 'react';
import { GithubProfile } from '../../types/github';
import { MapPin, Link2, Twitter, Users, Calendar } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

interface ProfileHeaderProps {
  profile: GithubProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const joinDate = new Date(profile.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <GlassCard className="p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-32 h-32 rounded-xl shadow-lg"
        />
        
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-nord-6">{profile.name}</h1>
            <p className="text-nord-4">@{profile.login}</p>
          </div>
          
          {profile.bio && (
            <p className="text-nord-4 text-lg">{profile.bio}</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-nord-4" />
                <span className="text-nord-4">{profile.location}</span>
              </div>
            )}
            
            {profile.blog && (
              <div className="flex items-center space-x-2">
                <Link2 className="w-4 h-4 text-nord-4" />
                <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-nord-8 hover:text-nord-9">
                  {profile.blog}
                </a>
              </div>
            )}
            
            {profile.twitter_username && (
              <div className="flex items-center space-x-2">
                <Twitter className="w-4 h-4 text-nord-4" />
                <a href={`https://twitter.com/${profile.twitter_username}`} target="_blank" rel="noopener noreferrer" className="text-nord-8 hover:text-nord-9">
                  @{profile.twitter_username}
                </a>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-nord-4" />
              <span className="text-nord-4">Joined {joinDate}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-nord-4" />
              <span className="text-nord-4">
                <span className="font-bold text-nord-6">{profile.followers}</span> followers
              </span>
            </div>
            <span className="text-nord-4">•</span>
            <span className="text-nord-4">
              <span className="font-bold text-nord-6">{profile.following}</span> following
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProfileHeader;