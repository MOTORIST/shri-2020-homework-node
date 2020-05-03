import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import Container from '../../UI/Container';
import { Actions } from './Actions/Actions';
import { Title } from './Title/Title';
import './Header.post.css';
import './Container/Header-Container.post.css';

const HeaderCn = cn('Header');

export interface HeaderProps {
  title: string;
  color?: 'secondary';
  className?: string;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, color, className, children }) => {
  return (
    <div className={HeaderCn({}, [className])}>
      <Container className={HeaderCn('Container')} distribute="between">
        <Title color={color}>{title}</Title>
        <Actions>{children}</Actions>
      </Container>
    </div>
  );
};

export default Header;
