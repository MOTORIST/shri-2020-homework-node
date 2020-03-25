import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import './IconPlus-Content.post.css';

const ContentCn = cn('IconPlus', 'Content');

export const Content = ({ children, className }) => {
  return <div className={ContentCn(null, [className])}>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
