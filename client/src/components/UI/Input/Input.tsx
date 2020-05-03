import React, { LegacyRef } from 'react';
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

interface InputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  size?: 's' | 'm';
  clearable?: boolean;
  onClearable?: ({ name }: { name: string }) => void;
  status?: 'success' | 'error';
  width?: 'full' | '2xs';
  className?: string;
  inputRef?: LegacyRef<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  size,
  clearable,
  onClearable,
  status,
  width = 'full',
  placeholder,
  className,
  inputRef,
}) => {
  const handleClearable = (): void => {
    if (onClearable && name) {
      onClearable({ name });
    }
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
