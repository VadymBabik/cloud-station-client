import React, { ReactNode } from 'react';
import Link from 'next/link';

import { ClassName, Href } from '../../../types';

type NextLinkHelperOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => void;

interface NextLinkHelperProps {
  className?: ClassName;
  href: Href;
  prefetch?: boolean;
  title?: string;
  onClick?: NextLinkHelperOnClick;
  children: ReactNode;
}

function NextLinkHelper({
  className,
  href,
  prefetch,
  title,
  onClick,
  children
}: NextLinkHelperProps) {
  return (
    <Link href={href} prefetch={prefetch}>
      <a className={className} onClick={onClick} title={title}>
        {children}
      </a>
    </Link>
  );
}

export default NextLinkHelper;
