import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store';
import { MoviesDataType } from '../types';

import { GlobalStyle } from '../../styles/global-styles';
import { StyledHeader } from '../components/header/header.styles';
import { MovieFullInfo } from '../components/movie-full-info/movie-full-info.component';
import { NavPanel } from '../components/nav-panel/nav-panel.component';
import { MoviesSorterContainer } from './movies-sorter.container';
import { MoviesListContainer } from './movies-list.container';
import { Footer } from '../components/footer/footer.component';
import { NotFoundContainer } from '../components/not-found/not-found.component';
import { fetchMovies, setViewType } from '../actions';
import { TypeOfView } from '../constants/app.constants';

export const MoviePageContainer: FC = () => {
  const dispatch = useDispatch();
  const onSetMovieListType = useCallback(() => {
    dispatch(setViewType(TypeOfView.movieList));
    dispatch(fetchMovies());
  }, []);
  const { moviesData } = useSelector((state: RootState) => ({
    moviesData: state.moviesData.get('movies'),
  }));

  interface ParamTypes {
    id: string;
  }

  const { id } = useParams<ParamTypes>();

  const currentMovieById = moviesData.find(
    (currentValue: MoviesDataType) => currentValue.id.toString() === id
  );

  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <NavPanel onClickToChange={onSetMovieListType} />
        {currentMovieById !== undefined ? (
          <MovieFullInfo currentMovieFullInfo={currentMovieById} />
        ) : (
          <NotFoundContainer />
        )}
      </StyledHeader>
      <MoviesSorterContainer />
      <MoviesListContainer />
      <Footer />
    </>
  );
};
