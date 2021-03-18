import '../styles/styles.scss';
import React, { FC } from 'react';

import { Header } from './components/header/header-component';
import { MoviesList } from './components/movies-list/movies-list-component';
import { Footer } from './components/footer/footer-component';

export const App: FC = () => {
  return (
    <>
      <Header />
      <MoviesList />
      <Footer />
    </>
  );
};
