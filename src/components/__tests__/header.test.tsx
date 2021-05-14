import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '../header/header.component';

describe('< Header /> component', () => {
  const HeaderMock = {
    viewType: 'movieList',
    movieSearchType: 'title',
    currentMovie: {
      poster_path: 'Test URL',
      title: 'Test title',
      release_date: 'Test release date',
      overview: 'Test overview',
      id: 0,
    },
    onSetMovieListType: jest.fn(),
    onSetSearchInputValue: jest.fn(),
    setMovieSearchType: jest.fn(),
  };
  test('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <Header
          viewType={HeaderMock.viewType}
          currentMovie={HeaderMock.currentMovie}
          onSetMovieListType={HeaderMock.onSetMovieListType}
          movieSearchType={HeaderMock.movieSearchType}
          onSetMovieSearchType={HeaderMock.setMovieSearchType}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
