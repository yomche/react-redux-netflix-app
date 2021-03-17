import '../styles/styles.scss';
import React, { FC } from 'react';

import { HeaderComponent } from './components/header/header-component';
import { MoviesList } from './components/movies-list/movies-list-component';
import { FooterComponent } from './components/footer/footer-component';

export const App: FC = () => {
  return (
    <>
      <HeaderComponent />
      <MoviesList />
      <FooterComponent />
    </>
  );
};
