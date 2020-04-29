import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './Page.post.css';

const PageCn = cn('Page');

export interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page: React.FC<PageProps> = ({ className, children, ...other }) => {
  return (
    <div className={PageCn(null, [className])} {...other}>
      {children}
    </div>
  );
};
