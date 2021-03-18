import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { MoviesList } from '../components/movies-list/movies-list-component';

export default {
  title: 'Components/Movies List',
  component: MoviesList,
};

const Template: Story<ComponentProps<typeof MoviesList>> = (args) => <MoviesList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};