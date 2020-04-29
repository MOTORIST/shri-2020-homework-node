import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import Typography from '../../../UI/Typography';
import './Header-Title.post.css';

const HeaderCn = cn('Header');

export interface TitleProps {
  color: 'secondary';
  children?: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ color, children }) => {
  return (
    <Typography className={HeaderCn('Title')} variant="h3" color={color}>
      {children}
    </Typography>
  );
};
