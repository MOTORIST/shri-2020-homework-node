import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import './Container.post.css';
import './_arrange/Container_arrange_col.post.css';
import './_arrange/Container_arrange_row.post.css';
import './_distribute/Container_distribute_between.post.css';
import './_distribute/Container_distribute_center.post.css';
import './_height/Container_height-full.post.css';
import './_space-h/Container_space-h_s.post.css';
import './_vertical-align/Container_vertical-align_center.post.css';

export const ContainerCn = cn('Container');

export const Container = ({
  distribute,
  arrange,
  height,
  spaceH,
  verticalAlign,
  className,
  children,
}) => {
  const modificators = {
    distribute,
    arrange,
    height,
    'space-h': spaceH,
    'vertical-align': verticalAlign,
  };

  return <div className={ContainerCn(modificators, [className])}>{children}</div>;
};

Container.propTypes = {
  distribute: PropTypes.oneOf(['between', 'center']),
  arrange: PropTypes.oneOf(['col', 'row']),
  height: PropTypes.oneOf(['full']),
  spaceH: PropTypes.oneOf(['s']),
  verticalAlign: PropTypes.oneOf(['center']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
