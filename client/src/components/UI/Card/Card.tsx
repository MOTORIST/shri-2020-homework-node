import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './Card.post.css';
import './_clickable/Card_clickable.post.css';

const CardCn = cn('Card');

export interface CardProps {
  clickable: boolean;
  onClick: () => void;
  className: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ clickable, onClick, className, children }) => {
  return (
    <div className={CardCn({ clickable }, [className])} onClick={onClick}>
      {children}
    </div>
  );
};
