import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './Link.post.css';

const LinkCn = cn('Link');

export const Link = ({ href, children, className }) => {
  return (
    <a className={LinkCn(null, [className])} href={href}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
