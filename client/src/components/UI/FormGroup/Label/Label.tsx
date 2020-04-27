import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import './FormGroup-Label.post.css';
import './_required/FormGroup-Label_required.post.css';

const LabelCn = cn('FormGroup', 'Label');

export const Label = ({ htmlFor, required, className, children }) => {
  return (
    <label htmlFor={htmlFor} className={LabelCn({ required }, [className])}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
