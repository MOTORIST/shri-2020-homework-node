import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import './Header-Actions.post.css';

const ActionsCn = cn('Header', 'Actions');

export interface ActionsProps {
  children: ReactNode;
}

export const Actions: React.FC<ActionsProps> = ({ children }) => {
  return <div className={ActionsCn()}>{children}</div>;
};
