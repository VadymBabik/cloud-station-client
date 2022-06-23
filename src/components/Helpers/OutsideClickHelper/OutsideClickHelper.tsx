import React, { ReactNode } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface OutsideClickHelperProps {
  display: 'block' | 'flex' | 'inline' | 'inline-block' | 'contents';
  onOutsideClick: () => void;
  children: ReactNode;
}

function OutsideClickHelper({
  display,
  onOutsideClick,
  children
}: OutsideClickHelperProps) {
  return (
    <OutsideClickHandler display={display} onOutsideClick={onOutsideClick}>
      {children}
    </OutsideClickHandler>
  );
}

export default OutsideClickHelper;
