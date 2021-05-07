import React, { FC, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store';

import { GlobalStyle } from '../../styles/global-styles';
import { StyledHeader } from '../components/header/header.styles';
import { MovieFullInfo } from '../components/movie-full-info/movie-full-info.component';
import { NavPanel } from '../components/nav-panel/nav-panel.component';
import { MoviesSorterContainer } from './movies-sorter.container';
import { MoviesListContainer } from './movies-list.container';
import { Footer } from '../components/footer/footer.component';
import { NotFoundContainer } from '../components/not-found/not-found.component';
import { fetchMovieById, fetchMovies, setViewType } from '../actions';
import { TypeOfView } from '../constants/app.constants';

export const MoviePageContainer: FC = () => {
  const dispatch = useDispatch();
  const onSetMovieListType = useCallback(() => {
    dispatch(setViewType(TypeOfView.movieList));
    dispatch(fetchMovies());
  }, []);
  const { currentMovieById } = useSelector((state: RootState) => ({
    currentMovieById: state.currentMovieData.get('movie'),
  }));

  interface ParamTypes {
    id?: string;
  }

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (currentMovieById.id === undefined) {
      dispatch(fetchMovieById(Number(id)));
    }
  }, [id]);

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
