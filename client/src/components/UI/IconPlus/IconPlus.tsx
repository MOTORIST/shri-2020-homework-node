import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './IconPlus.post.css';
import './_distance/IconPlus_distance_xs.post.css';

const IconPlusCn = cn('IconPlus');

export const IconPlus = ({ distance, children, className }) => {
  return <div className={IconPlusCn({ distance }, [className])}>{children}</div>;
};

IconPlus.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  distance: PropTypes.oneOf(['xs']),
};
