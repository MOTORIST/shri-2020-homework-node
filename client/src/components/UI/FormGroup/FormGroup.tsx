import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './FormGroup.post.css';
import './_row/FormGroup_row.post.css';

const FormGroupCn = cn('FormGroup');

export interface FormGroupProps {
  row?: boolean;
  children?: ReactNode;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ row, className, children }) => {
  return <div className={FormGroupCn({ row }, [className])}>{children}</div>;
};

export default FormGroup;
