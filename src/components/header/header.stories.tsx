import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { Header } from './header.component';

storiesOf('Knobs/Header', module)
  .addDecorator(withKnobs)
  .add('different view types', () => {
    const viewType = {
      movieList: 'movieList',
      MovieFullInfo: 'movieFullInfo',
    };
    const viewTypeSelect = options('viewType', viewType, 'movieList', { display: 'select' });
    const currentMovie = {
      posterPath:
        'https://sun9-72.userapi.com/impf/a-V1H8zLHXqzMb3UY8yzgicFlOVZkHw4TNXeLQ/PHLkRY64ehg.jpg?size=1459x2160&quality=96&sign=1063b2565af2a89c8ae442b61427f9e7&type=album',
      title: 'Black Mirror',
      releaseDate: '2011-02-07',
      overview:
        'Set in a world only minutes from our own, Black Mirror unveils how modern technologies can backfire and be used against their makers, every episode set in a slightly different reality with different characters combating different types of technologies.',
      id: 0,
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function setMovieListType() {}

    return (
      <Header
        viewType={viewTypeSelect}
        currentMovie={currentMovie}
        onSetMovieListType={setMovieListType}
      />
    );
  });
