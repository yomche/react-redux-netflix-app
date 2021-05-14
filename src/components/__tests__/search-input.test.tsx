import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { SearchInput } from '../search-input/search-input.component';

describe('< SearchInput /> component', () => {
  const MockInput = {
    movieSearchType: 'title',
    onSetSearchInputValue: jest.fn(),
    onSetMovieSearchType: jest.fn(),
  };
  test('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <SearchInput
          updateSearchInputValue={MockInput.onSetSearchInputValue}
          setMovieSearchType={MockInput.onSetMovieSearchType}
          movieSearchType={MockInput.movieSearchType}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
