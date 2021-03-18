import '../styles/styles.scss';
import React, { FC } from 'react';

import { Header } from './components/header/header-component';
import { MoviesList } from './components/movies-list/movies-list-component';
import { Footer } from './components/footer/footer-component';
import { MoviesSorter } from './components/movies-sorter/movies-sorter-component';

import { MovieFullInfo } from './components/movie-full-info/movie-full-info-component';

export const App: FC = () => (
  <>
    {/* <MovieFullInfo /> */}
    <Header />
    <MoviesSorter />
    <MoviesList />
    <Footer />
  </>
);
