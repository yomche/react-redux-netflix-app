/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { SearchInput } from './search-input.component';

export default {
  title: 'Components/Search Input',
  component: SearchInput,
};

const Template: Story<ComponentProps<typeof SearchInput>> = () => {
  const movieSearchType = 'test value';
  function onSetSearchInputValue() {}
  function onSetMovieSearchType() {}

  return (
    <SearchInput
      updateSearchInputValue={onSetSearchInputValue}
      toggleMovieSearchType={onSetMovieSearchType}
      movieSearchType={movieSearchType}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
