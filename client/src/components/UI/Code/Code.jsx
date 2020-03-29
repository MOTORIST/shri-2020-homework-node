import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './Code.post.css';

const CodeCn = cn('Code');

export const Code = ({ children, className }) => {
  return <pre className={CodeCn(null, [className])}>{children}</pre>;
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
