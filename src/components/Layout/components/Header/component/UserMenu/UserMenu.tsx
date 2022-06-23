import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

import { userNavigation } from '../../../../../../constans/mocData';
import { useAuth } from '../../../../../Helpers/AuthProvider/AuthProvider';
import { NextLinkHelper } from '../../../../../Helpers/lincs/NextLinkHelper';

const UserMenu = () => {
  const { currentUser } = useAuth();
  return (
    <div className="flex space-x-4">
      {isEmpty(currentUser) ? (
        <Fragment>
          <NextLinkHelper
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            href={'/auth/login'}
          >
            Sing In
          </NextLinkHelper>
        </Fragment>
      ) : (
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <span className="text-cyan-900 text-base font-medium">
              {currentUser?.name}
            </span>

            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      currentUser?.imageUrl ??
                      'http://e-bugle.com/uploads/empty_user.png'
                    }
                    alt={currentUser?.name}
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-8 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((itemMenu) => (
                    <Menu.Item key={itemMenu.name}>
                      {({ active }) => (
                        <NextLinkHelper href={itemMenu.href}>
                          <a
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {itemMenu.name}
                          </a>
                        </NextLinkHelper>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
