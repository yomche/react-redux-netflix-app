/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { MoviesSorter } from './movies-sorter.component';

export default {
  title: 'Components/Movies Sorter',
  component: MoviesSorter,
};

const Template: Story<ComponentProps<typeof MoviesSorter>> = () => {
  const moviesAmount = 10;
  const movieSortType = 'testValue';
  function setSortType() {}

  return (
    <MoviesSorter
      moviesAmount={moviesAmount}
      onSetSortType={setSortType}
      movieSortType={movieSortType}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
