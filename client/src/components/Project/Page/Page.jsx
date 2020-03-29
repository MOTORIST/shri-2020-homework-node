import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './Page.post.css';

const PageCn = cn('Page');

export const Page = ({ className, children }) => {
  return <div className={PageCn(null, [className])}>{children}</div>;
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
