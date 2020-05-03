import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './ButtonGroups.post.css';
import './_distribute/ButtonGroups_distribute_m.post.css';

const ButtonGroupsCn = cn('ButtonGroups');

export interface ButtonGroupsProps {
  distribute?: 'm';
  children: ReactNode;
}

export const ButtonGroups: React.FC<ButtonGroupsProps> = ({ distribute = 'm', children }) => {
  return <div className={ButtonGroupsCn({ distribute })}>{children}</div>;
};
