import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import { icons } from './icons.data';
import './Icon.post.css';
import './_color/Icon_color_default.post.css';
import './_color/Icon_color_error.post.css';
import './_color/Icon_color_secondary.post.css';
import './_color/Icon_color_success.post.css';
import './_color/Icon_color_warning.post.css';
import './_size/Icon_size_s.post.css';
import './_size/Icon_size_m.post.css';
import './_size/Icon_size_l.post.css';
import './_size/Icon_size_xl.post.css';
import './_size/Icon_size_7xl.post.css';

const IconCn = cn('Icon');

export const Icon = ({ color, size, name }) => {
  return (
    <svg className={IconCn({ color, size })} viewBox="0 0 124 124">
      <path d={icons[name]} />
    </svg>
  );
};

Icon.propTypes = {
  color: PropTypes.oneOf(['default', 'error', 'secondary', 'success', 'warning']).isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', '7xl']),
  name: PropTypes.oneOf([
    'calendar',
    'clear',
    'clock',
    'codeCommit',
    'done',
    'fail',
    'logo',
    'play',
    'rebuild',
    'settings',
    'stopwatch',
    'user',
  ]).isRequired,
};

Icon.defaultProps = {
  color: 'default',
  size: 'm',
};
