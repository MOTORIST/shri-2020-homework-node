import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import './FormGroup-Error.post.css';

const ErrorCn = cn('FormGroup', 'Error');

export const Error = ({ children, className }) => {
  return <div className={ErrorCn(null, [className])}>{children}</div>;
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
