import React from 'react';
import { useAuth } from '../../../../components/Helpers/AuthProvider/AuthProvider';
import { ProfileAvatar } from '../components/ProfileAvatar';
import EditingFieldProfile from '../components/EditingFieldProfile/EditingFieldProfile';
import { ProfileEditFields } from '../../profileTypes';

const ProfileIndexPage = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return null;
  }
  return (
    <div className="flex gap-4">
      <ProfileAvatar imageUrl={currentUser?.imageUrl} />
      <div className="flex flex-col">
        <EditingFieldProfile
          value={currentUser?.name}
          label={'Name'}
          fields={ProfileEditFields.NAME}
        />
        <EditingFieldProfile
          value={currentUser?.email}
          label={'Email'}
          fields={ProfileEditFields.EMAIL}
        />
      </div>
    </div>
  );
};

export default ProfileIndexPage;
