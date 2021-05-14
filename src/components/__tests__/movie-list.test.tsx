import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { MoviesList } from '../movies-list/movies-list.component';
import { MoviesDataType } from '../../types';

describe('< MovieList /> component', () => {
  type MoviesListProps = {
    moviesData: MoviesDataType[];
    setMovieFullInfoType: (currentMovie: {
      poster_path: string;
      title: string;
      release_date: string;
      overview: string;
      genre: string;
      id: number;
    }) => React.MouseEventHandler<HTMLLIElement>;
  };

  const MoviesListMock: MoviesListProps = {
    moviesData: [
      {
        poster_path:
          'https://sun9-72.userapi.com/impf/a-V1H8zLHXqzMb3UY8yzgicFlOVZkHw4TNXeLQ/PHLkRY64ehg.jpg?size=1459x2160&quality=96&sign=1063b2565af2a89c8ae442b61427f9e7&type=album',
        title: 'Black Mirror',
        release_date: '2011-02-07',
        genres: ['Drama', 'Thriller'],
        overview:
          'Set in a world only minutes from our own, Black Mirror unveils how modern technologies can backfire and be used against their makers, every episode set in a slightly different reality with different characters combating different types of technologies.',
        id: 1000,
      },
      {
        poster_path:
          'https://sun9-51.userapi.com/impf/wTwDr3Eh4cZlJPKHiHp90nPQlTlkGfPsAfqFaQ/7VcL1Zco3C4.jpg?size=1458x2160&quality=96&sign=4b7d9e8ab01d00a262d358f8a2e82534&type=album',
        title: 'Chilling Adventures of Sabrina',
        release_date: '2018-12-13',
        genres: ['Fantasy', 'Drama'],
        overview:
          "Reimagines the origin and adventures of Sabrina: the Teenage Witch as a dark coming-of-age story that traffics in horror, the occult and, of course, witchcraft. Tonally in the vein of Rosemary's Baby and The Exorcist, this adaptation finds Sabrina Spellman wrestling to reconcile her dual nature - half-witch, half-mortal - while standing against the evil forces that threaten her, her family and the daylight world humans inhabit.",
        id: 1001,
      },
      {
        poster_path:
          'https://sun9-42.userapi.com/impf/P71f5UItZ2ekG0PzCp16UgWLms_GxmWBzDjREQ/nEkurXb2xWE.jpg?size=1458x2160&quality=96&sign=484ff49b495837b36cf31564231e99ba&type=album',
        title: 'The Witcher',
        release_date: '2019-02-13',
        genres: ['Adventure', 'Fantasy'],
        overview:
          'The Witcher is an American fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.',
        id: 1004,
      },
    ],
    setMovieFullInfoType: jest.fn(),
  };

  it('renders with movies data', () => {
    const { asFragment } = render(
      <Router>
        <MoviesList
          onSetMovieFullInfoType={MoviesListMock.setMovieFullInfoType}
          moviesData={MoviesListMock.moviesData}
        />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders 3 films', () => {
    const component = mount(
      <Router>
        <MoviesList
          onSetMovieFullInfoType={MoviesListMock.setMovieFullInfoType}
          moviesData={MoviesListMock.moviesData}
        />
      </Router>
    );

    expect(component.find('li')).toHaveLength(3);
  });

  it('return "No movies were found" line if there is no movies data', () => {
    const component = mount(
      <MoviesList onSetMovieFullInfoType={MoviesListMock.setMovieFullInfoType} moviesData={[]} />
    );

    expect(component.text()).toBe('Sorry, no movies were found');
  });
});
