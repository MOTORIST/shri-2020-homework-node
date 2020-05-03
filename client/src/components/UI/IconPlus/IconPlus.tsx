import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './IconPlus.post.css';
import './_distance/IconPlus_distance_xs.post.css';

const IconPlusCn = cn('IconPlus');

export interface IconPlusProps {
  children: ReactNode;
  className?: string;
  distance: 'xs';
}

export const IconPlus: React.FC<IconPlusProps> = ({ distance, children, className }) => {
  return <div className={IconPlusCn({ distance }, [className])}>{children}</div>;
};
