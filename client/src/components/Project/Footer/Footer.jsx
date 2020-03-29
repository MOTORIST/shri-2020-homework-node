import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import Container from '../../UI/Container';
import Link from '../Link';

import './Footer.post.css';
import './Container/Footer-Container.post.css';
import './Menu/Footer-Menu.post.css';
import './MenuItem/Footer-MenuItem.post.css';
import './Coop/Footer-Coop.post.css';

const FooterCn = cn('Footer');

export const Footer = () => {
  return (
    <div className={FooterCn()}>
      <Container className={FooterCn('Container')}>
        <ul className={FooterCn('Menu')}>
          <li className={FooterCn('MenuItem')}>
            <Link href="#">Support</Link>
          </li>
          <li className={FooterCn('MenuItem')}>
            <Link href="#">Learning</Link>
          </li>
        </ul>
        <div className={FooterCn('Coop')}>© 2020 Your Name</div>
      </Container>
    </div>
  );
};

Footer.propTypes = {};
