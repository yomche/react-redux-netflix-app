import '../styles/styles.scss';
import React from 'react';

import HeaderComponent from './components/header/header-component';
import MainMenuComponent from './components/main-menu/main-menu-component';
import FooterComponent from './components/footer/footer-component';

export default function App(): JSX.Element {
  return (
    <>
      <HeaderComponent />
      <MainMenuComponent />
      <FooterComponent />
    </>
  );
}
