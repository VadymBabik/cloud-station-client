import React, { ReactNode, MouseEvent, useCallback } from 'react';

import { ButtonType, ClassName, isDisabled } from '../../../../types';

type SubmitButtonHelperOnClick = (e: MouseEvent<HTMLButtonElement>) => void;

interface SimpleButtonProps {
  className?: ClassName;
  disabled?: isDisabled;
  children: ReactNode;
  onClick?: SubmitButtonHelperOnClick;
  type?: ButtonType;
  form?: string;
}

const SimpleButton = ({
  className,
  disabled,
  onClick,
  children,
  type = ButtonType.BUTTON,
  form
}: SimpleButtonProps) => {
  const handleClick =
    type === ButtonType.SUBMIT
      ? useCallback<SubmitButtonHelperOnClick>(
          (e) => {
            onClick?.(e);
          },
          [onClick]
        )
      : useCallback<SubmitButtonHelperOnClick>(
          (e) => {
            e.preventDefault();
            onClick?.(e);
          },
          [onClick]
        );
  return (
    <button
      className={
        className ||
        'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
      }
      disabled={disabled}
      onClick={handleClick}
      type={type}
      form={form}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
