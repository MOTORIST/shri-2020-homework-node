import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './Card.post.css';
import './_clickable/Card_clickable.post.css';

const CardCn = cn('Card');

export const Card = ({ clickable, onClick, className, children }) => {
  return (
    <div className={CardCn({ clickable }, [className])} onClick={onClick}>
      {children}
    </div>
  );
};

Card.propTypes = {
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
