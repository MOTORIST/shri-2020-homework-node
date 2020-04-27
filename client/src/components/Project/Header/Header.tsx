import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import Container from '../../UI/Container';
import { Actions } from './Actions/Actions';
import { Title } from './Title/Title';
import './Header.post.css';
import './Container/Header-Container.post.css';

const HeaderCn = cn('Header');

const Header = ({ title, color, className, children }) => {
  return (
    <div className={HeaderCn({}, [className])}>
      <Container className={HeaderCn('Container')} distribute="between">
        <Title color={color}>{title}</Title>
        <Actions>{children}</Actions>
      </Container>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['secondary']),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
