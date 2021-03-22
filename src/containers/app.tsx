import React, { FC, useState, useCallback } from 'react';

import { typeOfView } from '../constants/app.constants';
import { GlobalStyle } from '../../styles/global-styles';
import { Header } from '../components/header/header.component';
import { MoviesList } from '../components/movies-list/movies-list.component';
import { Footer } from '../components/footer/footer.component';
import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { ErrorBoundaryMoviesList } from './error-boundary';

export const App: FC = () => {
  const [viewType, setViewType] = useState(typeOfView.movieList);
  const setMovieFullInfoType = useCallback(() => setViewType(typeOfView.MovieFullInfo), []);
  const setMovieListType = useCallback(() => setViewType(typeOfView.movieList), []);

  return (
    <>
      <GlobalStyle />
      <Header viewType={viewType} onSetMovieListType={setMovieListType} />
      <MoviesSorter />
      <ErrorBoundaryMoviesList>
        <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};
