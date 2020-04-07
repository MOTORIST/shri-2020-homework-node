import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../libs/classname';

import './Theme.post.css';
import './_color/Theme_color_default.post.css';
import './_control/Theme_control_default.post.css';
import './_font/Theme_font_default.post.css';
import './_size/Theme_size_default.post.css';
import './_space/Theme_space_default.post.css';

const ThemeCn = cn('Theme');

export const Theme = ({ color, control, font, size, space, children }) => {
  return <div className={ThemeCn({ color, control, font, size, space })}>{children}</div>;
};

Theme.propTypes = {
  color: PropTypes.oneOf(['default']).isRequired,
  control: PropTypes.oneOf(['default']).isRequired,
  font: PropTypes.oneOf(['default']).isRequired,
  size: PropTypes.oneOf(['default']).isRequired,
  space: PropTypes.oneOf(['default']).isRequired,
};

Theme.defaultProps = {
  color: 'default',
  control: 'default',
  font: 'default',
  size: 'default',
  space: 'default',
};
