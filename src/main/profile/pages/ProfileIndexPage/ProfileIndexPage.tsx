import React from 'react';
import { useAuth } from '../../../../components/Helpers/AuthProvider/AuthProvider';

const ProfileIndexPage = () => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return null;
  }
  return (
    <div className="flex gap-4">
      <img
        className="h-52 w-52 "
        src={
          currentUser?.imageUrl ?? 'http://e-bugle.com/uploads/empty_user.png'
        }
        alt={currentUser?.name}
      />
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
