import React, { ReactNode } from 'react';
import { ClassName, Href, TargetLinc } from '../../../../types';

type LinkHelperOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => void;

interface LinkHelperProps {
  className?: ClassName;
  href: Href;
  target?: TargetLinc;
  onClick?: LinkHelperOnClick;
  children: ReactNode;
}

function LinkHelper({
  className,
  href,
  target = TargetLinc.BLANK,
  onClick,
  children
}: LinkHelperProps) {
  return (
    <a href={href} className={className} target={target} onClick={onClick}>
      {children}
    </a>
  );
}

export default LinkHelper;
