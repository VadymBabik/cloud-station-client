import { AddFolderModalButton } from './components/modalButtons/AddFolderModalButton';
import { SimpleButton } from '../../Helpers/Buttons/SimpleButton';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { TableHelper } from '../../Helpers/TableHelper';
import { tableBody, tableHeader } from '../../constans/mocData';

const DashBord = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-28 text-right">
          <SimpleButton
            className={
              'bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:outline-none active:ring-2 hover:ring-inset hover:ring-blue-800'
            }
          >
            <ArrowNarrowLeftIcon className="h-6 w-6" />
          </SimpleButton>
        </div>

        <h3 className="grow text-center">Folder name</h3>
      </div>
      <div className="text-start pb-4">
        <AddFolderModalButton />
      </div>
      <TableHelper header={tableHeader} body={tableBody} />
    </>
  );
};

export default DashBord;
