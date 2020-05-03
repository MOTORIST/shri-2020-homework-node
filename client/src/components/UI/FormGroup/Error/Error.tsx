import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import './FormGroup-Error.post.css';

const ErrorCn = cn('FormGroup', 'Error');

export interface ErrorProps {
  children?: ReactNode;
  className?: string;
}

export const Error: React.FC<ErrorProps> = ({ children, className }) => {
  return <div className={ErrorCn(null, [className])}>{children}</div>;
};
