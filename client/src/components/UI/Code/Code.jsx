import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import Convert from 'ansi-to-html';
import './Code.post.css';

const CodeCn = cn('Code');

export const Code = ({ children, className }) => {
  const convert = new Convert({ fg: '#000' });

  return (
    <pre
      className={CodeCn(null, [className])}
      dangerouslySetInnerHTML={{ __html: convert.toHtml(children) }}
    />
  );
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
