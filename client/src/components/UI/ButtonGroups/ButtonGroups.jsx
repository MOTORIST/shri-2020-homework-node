import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './ButtonGroups.post.css';
import './_distribute/ButtonGroups_distribute_m.post.css';

const ButtonGroupsCn = cn('ButtonGroups');

export const ButtonGroups = ({ distribute, children }) => {
  return <div className={ButtonGroupsCn({ distribute })}>{children}</div>;
};

ButtonGroups.propTypes = {
  distribute: PropTypes.oneOf(['m']),
  children: PropTypes.node.isRequired,
};

ButtonGroups.defaultProps = {
  distribute: 'm',
};
