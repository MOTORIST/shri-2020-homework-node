import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import { Link as RouteLink } from 'react-router-dom';
import './Link.post.css';

const LinkCn = cn('Link');

export const Link = ({ href, to, children, className }) => {
  if (href) {
    return (
      <a className={LinkCn(null, [className])} href={href}>
        {children}
      </a>
    );
  }

  return (
    <RouteLink className={LinkCn(null, [className])} to={to}>
      {children}
    </RouteLink>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
