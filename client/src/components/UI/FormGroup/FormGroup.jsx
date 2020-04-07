import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './FormGroup.post.css';
import './_row/FormGroup_row.post.css';

const FormGroupCn = cn('FormGroup');

const FormGroup = ({ row, className, children }) => {
  return <div className={FormGroupCn({ row }, [className])}>{children}</div>;
};

FormGroup.propTypes = {
  row: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
