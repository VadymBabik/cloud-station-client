import React, { Fragment, ReactNode } from 'react';
import className from 'classnames';

import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

import { isLoading, ModalSize } from '../../../types';
import { SimpleButton } from '../../Buttons/SimpleButton';

interface ModalHelperProps {
  title: string;
  children: ReactNode;
  hideModal: () => void;
  isOpen: boolean;
  handleSubmit?: () => void;
  isLoading: isLoading;
  modalSize?: ModalSize;
}

export default function SimpleModal({
  title,
  children,
  hideModal,
  isOpen,
  handleSubmit,
  isLoading,
  modalSize = ModalSize.XS
}: ModalHelperProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={hideModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={className(
                  'relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all',
                  {
                    'mx-10 max-h-full w-full': modalSize === ModalSize.FULL,
                    'max-h-full w-full sm:max-w-xl': modalSize === ModalSize.XL,
                    'max-h-full w-full sm:max-w-xs': modalSize === ModalSize.XS,
                    'max-h-full w-full sm:max-w-sm': modalSize === ModalSize.SM
                  }
                )}
              >
                <div className="bg-white px-4 pt-1 pb-4 sm:p-4 sm:pb-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <div className="text-xl grow text-center">{title}</div>
                    <SimpleButton
                      onClick={hideModal}
                      className={
                        'bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:outline-none active:ring-2 hover:ring-inset hover:ring-red-500'
                      }
                    >
                      <XIcon
                        className="h-6 w-6"
                        // className="h-6 w-6 text-black hover:text-red-600 hover:rotate-90 transition delay-75 duration-200 ease-in-out"
                        aria-hidden="true"
                      />
                    </SimpleButton>
                  </div>
                </div>
                <hr className="bg-cyan-900 h-0.5 opacity-30 mb-4" />
                <div className="px-4">{children}</div>
                <hr className="bg-cyan-900 h-0.5 opacity-30 mt-4" />
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <SimpleButton onClick={handleSubmit}>
                    {isLoading ? 'Processing...' : 'Submit'}
                  </SimpleButton>

                  <SimpleButton
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={hideModal}
                  >
                    Cancel
                  </SimpleButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
