import React, { FC } from 'react';

import { GlobalStyle } from '../../styles/global-styles';
import { ErrorBoundaryMoviesList } from './error-boundary';
import { MoviesSorterContainer } from './movies-sorter.container';
import { HeaderContainer } from './header.container';
import { MoviesListContainer } from './movies-list.container';
import { Footer } from '../components/footer/footer.component';

export const MainPageContainer: FC = () => (
  <>
    <GlobalStyle />
    <HeaderContainer />
    <MoviesSorterContainer />
    <ErrorBoundaryMoviesList>
      <MoviesListContainer />
    </ErrorBoundaryMoviesList>
    <Footer />
  </>
);
