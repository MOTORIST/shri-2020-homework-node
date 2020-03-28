import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import { ClearButton } from './ClearButton/ClearButton';
import './Input.post.css';
import './_size/Input_size_s.post.css';
import './_size/Input_size_m.post.css';
import './_clearable/Input_clearable.post.css';
import './_status/Input_status_error.post.css';
import './_status/Input_status_success.post.css';
import './_width/Input_width_2xs.post.css';
import './_width/Input_width_full.post.css';

import './Control/Input-Control.post.css';

const InputCn = cn('Input');

export const Input = ({
  id,
  name,
  size,
  clearable,
  onClearable,
  status,
  width,
  placeholder,
  className,
  inputRef,
}) => {
  const handleClearable = e => {
    onClearable({ name });
  };

  return (
    <div className={InputCn({ size, clearable, status, width }, [className])}>
      <input
        id={id}
        name={name}
        ref={inputRef}
        className={InputCn('Control')}
        placeholder={placeholder}
      />
      {clearable && <ClearButton size={size} onClick={handleClearable} />}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm']),
  clearable: PropTypes.bool,
  onClearable: PropTypes.func,
  status: PropTypes.oneOf(['success', 'error']),
  width: PropTypes.oneOf(['full', '2xs']),
};

Input.defaultProps = {
  width: 'full',
};
