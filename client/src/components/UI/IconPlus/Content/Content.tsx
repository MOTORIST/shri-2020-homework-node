import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import './IconPlus-Content.post.css';

const ContentCn = cn('IconPlus', 'Content');

export interface ContentProps {
  children: ReactNode;
  className?: string;
}

export const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={ContentCn(null, [className])}>{children}</div>;
};
