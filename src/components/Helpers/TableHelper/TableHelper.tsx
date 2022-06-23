import React from 'react';
import { map } from 'lodash';
import {
  DocumentIcon,
  DotsVerticalIcon,
  FolderIcon
} from '@heroicons/react/solid';

interface TableHelperProps {
  header: {
    id: number;
    name: string;
  }[];

  body: {
    id: number;
    type: 'file' | 'folder';
    name: string;
    date: string;
    status: boolean;
  }[];
}

const TableHelper = ({ header, body }: TableHelperProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {map(header, ({ name, id }) => (
              <th key={id} scope="col" className="px-6 py-3">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {map(body, ({ id, type, name, status, date }) => (
            <tr
              key={id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 w-1/12 dark:text-white whitespace-nowrap"
              >
                {type === 'file' && <DocumentIcon className="h-6 w-6" />}
                {type === 'folder' && <FolderIcon className="h-6 w-6" />}
              </th>
              <td className="px-6 py-4 w-full">{name}</td>
              <td className="px-6 py-4">
                {status ? (
                  <span className="w-48 bg-red-300 rounded-l-full rounded-r-full px-2 py-1 text-red-800 text-xs leading-3">
                    failed
                  </span>
                ) : (
                  <span className=" bg-green-300 rounded-l-full rounded-r-full px-2 py-1 text-green-800 text-xs leading-3">
                    success
                  </span>
                )}
              </td>
              <td className="px-6 py-4 w-4/6">{date}</td>
              <td className="px-6 py-4 text-center   w-1/12">
                <DotsVerticalIcon className="h-6 w-6 hover:text-white" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHelper;
