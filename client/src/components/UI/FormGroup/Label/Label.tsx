import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import './FormGroup-Label.post.css';
import './_required/FormGroup-Label_required.post.css';

const LabelCn = cn('FormGroup', 'Label');

export interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}
export const Label: React.FC<LabelProps> = ({ htmlFor, required, className, children }) => {
  return (
    <label htmlFor={htmlFor} className={LabelCn({ required }, [className])}>
      {children}
    </label>
  );
};
