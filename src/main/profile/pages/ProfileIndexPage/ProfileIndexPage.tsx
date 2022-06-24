import React from 'react';
import { useAuth } from '../../../../components/Helpers/AuthProvider/AuthProvider';
import ProfileAvatar from '../components/ProfileAvatar/ProfileAvatar';

const ProfileIndexPage = () => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return null;
  }
  return (
    <div className="flex gap-4">
      <ProfileAvatar imageUrl={currentUser?.imageUrl} />
      <div className="flex flex-col">
        <div className="flex flex-col pb-4">
          <span className="text-lg text-cyan-900 font-semibold tracking-wide">
            Name
          </span>
          <span>{currentUser?.name}</span>
        </div>
        <div className="flex flex-col pb-4">
          <span className="text-lg text-cyan-900 font-semibold tracking-wide">
            Email
          </span>
          <span>{currentUser?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileIndexPage;
