import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import { ClearButton } from './ClearButton/ClearButton';
import './Input.post.css';
import './_size/Input_size_s.post.css';
import './_size/Input_size_m.post.css';
import './_clearable/Input_clearable.post.css';

import './Control/Input-Control.post.css';

const InputCn = cn('Input');

export const Input = ({ size, clearable, placeholder, className }) => {
  return (
    <div className={InputCn({ size, clearable }, [className])}>
      <input className={InputCn('Control')} placeholder={placeholder} />
      {clearable && <ClearButton size={size} />}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm']),
  clearable: PropTypes.bool,
};
