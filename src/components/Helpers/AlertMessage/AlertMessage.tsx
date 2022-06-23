import React, { memo, ReactNode } from 'react';
import cl from 'classnames';
import { XIcon } from '@heroicons/react/outline';

interface AlertMessageProps {
  addClassName?: string;
  className?: string;
  message?: string | ReactNode | null;
}

function AlertMessage({
  addClassName,
  className,
  message = null
}: AlertMessageProps) {
  return message ? (
    <div
      className={
        className ||
        cl('bg-red-50 dark:bg-red-900 p-4 rounded-md', addClassName)
      }
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <XIcon className="h-5 w-5 text-red-400 dark:text-red-300" />
        </div>

        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
            {message}
          </h3>
        </div>
      </div>
    </div>
  ) : null;
}

export default memo(AlertMessage);
