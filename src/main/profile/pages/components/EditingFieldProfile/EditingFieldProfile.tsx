import React, { useState } from 'react';
import { useAuth } from '../../../../../components/Helpers/AuthProvider/AuthProvider';
import { SimpleButton } from '../../../../../components/Helpers/Buttons/SimpleButton';
import { PencilIcon } from '@heroicons/react/outline';
import { ProfileEditFields } from '../../../profileTypes';
import { useMutationHelper } from '../../../../../Hooks/baseQuery/baseQuery';
import { UPDATE_USER } from '../../../queries/updateUser.query';

interface EditingFieldProfileProps {
  label: string;
  value: string | undefined;
  fields: ProfileEditFields;
}

const EditingFieldProfile = ({
  label,
  value,
  fields
}: EditingFieldProfileProps) => {
  const [editing, setEditing] = useState<boolean>(true);
  const [valueInput, setValueInput] = useState<string | undefined>(value);
  const { currentUser } = useAuth();
  const { mutate, isLoading } = useMutationHelper({
    query: UPDATE_USER,
    cacheKey: 'currentUser'
  });

  const fieldsActions = (fields: ProfileEditFields) => {
    if (fields === ProfileEditFields.NAME) {
      return { id: currentUser?.id, name: valueInput };
    }
    if (fields === ProfileEditFields.EMAIL) {
      return { id: currentUser?.id, email: valueInput };
    }
    return;
  };
  return (
    <div className="mb-6">
      <label
        htmlFor={fields}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          readOnly={editing}
          id={fields}
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {editing && (
          <SimpleButton
            onClick={() => setEditing(false)}
            className={
              'h-8 w-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:outline-none active:ring-2 hover:ring-inset hover:ring-blue-500'
            }
          >
            <PencilIcon className="h-5 w-5" />
          </SimpleButton>
        )}
      </div>
      {!editing && (
        <div className="mt-4">
          <SimpleButton
            onClick={() => {
              setEditing(true), setValueInput(value);
            }}
          >
            Cancel
          </SimpleButton>
          <SimpleButton
            disabled={valueInput === value}
            onClick={() => {
              mutate(fieldsActions(fields)), setEditing(true);
            }}
          >
            {isLoading ? 'Processing...' : 'Save'}
          </SimpleButton>
        </div>
      )}
    </div>
  );
};

export default EditingFieldProfile;
