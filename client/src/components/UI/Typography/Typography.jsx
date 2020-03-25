import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './Typography.post.css';
import './_align/Typography_align_center.post.css';
import './_color/Typography_color_error.post.css';
import './_color/Typography_color_secondary.post.css';
import './_color/Typography_color_success.post.css';
import './_color/Typography_color_warning.post.css';
import './_nowrap/Typography_nowrap.post.css';
import './_variant/Typography_variant_body.post.css';
import './_variant/Typography_variant_h1.post.css';
import './_variant/Typography_variant_h2.post.css';
import './_variant/Typography_variant_h3.post.css';
import './_variant/Typography_variant_h4.post.css';

const TypographyCn = cn('Typography');

const Typography = ({ nowrap, variant, color, align, children, className }) => {
  return (
    <div className={TypographyCn({ nowrap, variant, color, align }, [className])}>{children}</div>
  );
};

Typography.propTypes = {
  nowrap: PropTypes.bool,
  variant: PropTypes.oneOf(['body', 'h1', 'h2', 'h3', 'h4']),
  color: PropTypes.oneOf(['error', 'secondary', 'success', 'warning']),
  align: PropTypes.oneOf(['center']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Typography;
