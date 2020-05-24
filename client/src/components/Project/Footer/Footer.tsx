import React from 'react';
import cn from '../../../libs/classname';
import Container from '../../UI/Container';
import Link from '../Link';
import LangSwitch from '../LangSwitch';
import { useTranslation } from 'react-i18next';

import './Footer.post.css';
import './Container/Footer-Container.post.css';
import './Menu/Footer-Menu.post.css';
import './MenuItem/Footer-MenuItem.post.css';
import './Coop/Footer-Coop.post.css';

const FooterCn = cn('Footer');

export const Footer: React.FC = () => {
  const { t } = useTranslation(['Footer']);

  return (
    <div className={FooterCn()}>
      <Container className={FooterCn('Container')}>
        <ul className={FooterCn('Menu')}>
          <li className={FooterCn('MenuItem')}>
            <Link href="#">{t('menu.support')}</Link>
          </li>
          <li className={FooterCn('MenuItem')}>
            <Link href="#">{t('menu.learning')}</Link>
          </li>
          <li className={FooterCn('MenuItem')}>
            <LangSwitch />
          </li>
        </ul>
        <div className={FooterCn('Coop')}>© 2020 {t('coop')}</div>
      </Container>
    </div>
  );
};
