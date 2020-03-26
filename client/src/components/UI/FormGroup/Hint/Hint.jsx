import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import './FormGroup-Hint.post.css';

const HintCn = cn('FormGroup', 'Hint');

export const Hint = ({ className, children }) => {
  return <div className={HintCn(null, [className])}>{children}</div>;
};

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
