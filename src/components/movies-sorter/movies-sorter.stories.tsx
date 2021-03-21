import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { MoviesSorter } from './movies-sorter.component';

export default {
  title: 'Components/Movies Sorter',
  component: MoviesSorter,
};

const Template: Story<ComponentProps<typeof MoviesSorter>> = () => <MoviesSorter />;

export const Primary = Template.bind({});
Primary.args = {};
