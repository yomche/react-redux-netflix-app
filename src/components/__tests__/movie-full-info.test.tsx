import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';

describe('< MovieFullInfo /> component', () => {
  const filmMock = {
    poster_path: 'Test URL',
    title: 'Test title',
    release_date: 'Test release date',
    overview: 'Test overview',
    id: 0,
  };

  test('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <MovieFullInfo currentMovieFullInfo={filmMock} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
