import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import './Header-Actions.post.css';

const ActionsCn = cn('Header', 'Actions');

export const Actions = ({ children }) => {
  return <div className={ActionsCn()}>{children}</div>;
};

Actions.propTypes = {
  children: PropTypes.node.isRequired,
};
