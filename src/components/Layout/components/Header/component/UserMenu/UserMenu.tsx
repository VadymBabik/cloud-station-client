import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

import { LoginModalButton } from '../../../ModalButton/LoginModalButton';

import { SimpleButton } from '../../../../../../Helpers/Buttons/SimpleButton';

import { userNavigation } from '../../../../../../constans/mocData';

interface UserMenuProps {
  user: { name: string; email: string; imageUrl: string };
}

const UserMenu = ({ user }: UserMenuProps) => {
  return (
    <div className="flex space-x-4">
      {isEmpty(user) ? (
        <Fragment>
          <LoginModalButton />
          <SimpleButton>Sing Up</SimpleButton>
        </Fragment>
      ) : (
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <span className="text-cyan-900 text-base font-medium">
              {user.name}
            </span>

            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      user.imageUrl ??
                      'http://e-bugle.com/uploads/empty_user.png'
                    }
                    alt={user.name}
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
                  {userNavigation.map((user) => (
                    <Menu.Item key={user.name}>
                      {({ active }) => (
                        <a
                          href={user.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {user.name}
                        </a>
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
