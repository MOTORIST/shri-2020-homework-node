import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import Typography from '../../../UI/Typography';
import './Header-Title.post.css';

const HeaderCn = cn('Header');

export const Title = ({ color, children }) => {
  return (
    <Typography className={HeaderCn('Title')} variant="h3" color={color}>
      {children}
    </Typography>
  );
};

Title.propTypes = {
  color: PropTypes.oneOf(['secondary']),
  children: PropTypes.node.isRequired,
};
