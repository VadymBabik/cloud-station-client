import React, { useCallback, useEffect, useState } from 'react';
import { SimpleButton } from '../Buttons/SimpleButton';
import ClassName from 'classnames';
import { ChevronUpIcon } from '@heroicons/react/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback<() => void>(
    () => (window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false)),
    [window, setIsVisible]
  );

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <SimpleButton
      onClick={scrollToTop}
      className={ClassName(
        isVisible ? 'opacity-100' : 'opacity-0',
        'fixed bottom-20 right-28 bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:outline-none active:ring-2 hover:ring-inset hover:ring-blue-700'
      )}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </SimpleButton>
  );
};

export default ScrollToTop;
