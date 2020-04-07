import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import Container from '../../../UI/Container';
import './Page-Content.post.css';

const ContentCn = cn('Page', 'Content');

export const Content = ({ contentPosition, arrange, className, children }) => {
  return (
    <Container
      className={ContentCn(null, [className])}
      verticalAlign={contentPosition && 'center'}
      distribute={contentPosition && 'center'}
      arrange={arrange}
    >
      {children}
    </Container>
  );
};

Content.propTypes = {
  arrange: PropTypes.oneOf(['row', 'col']),
  contentPosition: PropTypes.oneOf(['center']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
