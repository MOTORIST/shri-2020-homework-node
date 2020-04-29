import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import './FormGroup-Hint.post.css';

const HintCn = cn('FormGroup', 'Hint');

export interface HintProps {
  children?: ReactNode;
  className?: string;
}

export const Hint: React.FC<HintProps> = ({ className, children }) => {
  return <div className={HintCn(null, [className])}>{children}</div>;
};
