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
import { Loader } from '../components/loader/loader.component';
import { fetchMovieById, setViewType } from '../actions';
import { TypeOfView } from '../constants/app.constants';

export const MoviePageContainer: FC = () => {
  const dispatch = useDispatch();
  const onSetMovieListType = useCallback(() => {
    dispatch(setViewType(TypeOfView.movieList));
  }, []);
  const { currentMovieById } = useSelector((state: RootState) => ({
    currentMovieById: state.currentMovieData.get('movie'),
  }));

  interface ParamTypes {
    id?: string;
  }

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    dispatch(fetchMovieById(Number(id)));
  }, [id]);

  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <NavPanel onClickToChange={onSetMovieListType} />
        {JSON.stringify(currentMovieById) !== JSON.stringify({}) ? (
          <MovieFullInfo currentMovieFullInfo={currentMovieById} />
        ) : (
          <Loader />
        )}
      </StyledHeader>
      <MoviesSorterContainer />
      <MoviesListContainer />
      <Footer />
    </>
  );
};
