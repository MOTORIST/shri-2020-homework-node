import React, { ReactNode, MouseEvent } from 'react';
import cn from '../../../libs/classname';
import { Link as RouteLink } from 'react-router-dom';
import './Link.post.css';

const LinkCn = cn('Link');

export interface LinkProps {
  href?: string;
  to?: string;
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const Link: React.FC<LinkProps> = ({ href, to, children, className, onClick }) => {
  if (to) {
    return (
      <RouteLink className={LinkCn(null, [className])} to={to}>
        {children}
      </RouteLink>
    );
  }

  return (
    <a className={LinkCn(null, [className])} href={href} onClick={onClick}>
      {children}
    </a>
  );
};
