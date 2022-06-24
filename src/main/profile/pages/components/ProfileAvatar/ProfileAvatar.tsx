import React, { ChangeEvent, useState } from 'react';
import { first } from 'lodash';

import { ButtonType } from '../../../../../types';

import { Form } from '../../../../../components/Helpers/Form';
import { SimpleButton } from '../../../../../components/Helpers/Buttons/SimpleButton';
import { useMutationHelper } from '../../../../../Hooks/baseQuery/baseQuery';
import { UPDATE_USER } from '../../../queries/updateUser.query';
import { useAuth } from '../../../../../components/Helpers/AuthProvider/AuthProvider';

interface ProfileAvatarProps {
  imageUrl: string;
}

const ProfileAvatar = ({ imageUrl }: ProfileAvatarProps) => {
  const { currentUser } = useAuth();
  const { mutate, isLoading } = useMutationHelper({
    query: UPDATE_USER,
    cacheKey: 'currentUser'
  });

  const [inputFileState, setInputFileState] = useState<any>(null);
  const [previewSource, setPreviewSource] = useState<any>('');

  const handleInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = first(e.target.files);
    setInputFileState(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewSource(reader.result);
      };
    }
  };
  const clear = () => {
    setInputFileState(null), setPreviewSource('');
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', inputFileState);
    formData.append('upload_preset', 'upload_user_avatar');

    await fetch('https://api.cloudinary.com/v1_1/dlqab5iqf/image/upload', {
      method: 'POST',
      body: formData
    })
      .then((r) => r.json())
      .then((res) => mutate({ id: currentUser?.id, imageUrl: res.secure_url }))
      .then(() => clear());
  };
  return (
    <div>
      <img
        className="h-52 w-52 "
        src={
          (previewSource || imageUrl) ??
          'http://e-bugle.com/uploads/empty_user.png'
        }
        alt={imageUrl}
      />
      <Form onSubmit={handleSubmit}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="file_input"
        >
          Update avatar
        </label>

        {previewSource ? (
          <div>
            <SimpleButton type={ButtonType.SUBMIT}>
              {isLoading ? 'Processing...' : 'Save'}
            </SimpleButton>
            <SimpleButton type={ButtonType.BUTTON} onClick={clear}>
              Cancel
            </SimpleButton>
          </div>
        ) : (
          <input
            id="file_input"
            type="file"
            name="image"
            onChange={handleInputFileChange}
          />
        )}
      </Form>
    </div>
  );
};

export default ProfileAvatar;
