import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Header } from './header.component';

import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template: Story<ComponentProps<typeof Header>> = (args) => <Header {...args} />;

export const MovieList = Template.bind({});
MovieList.args = {
  viewType: 'movieList',
};

export const MovieFullInfo = Template.bind({});
MovieFullInfo.args = {
  viewType: 'movieFullInfo',
};

storiesOf('Header with Knobs', module)
  .addDecorator(withKnobs)
  .add('different view types', () => {
    const viewType = {
      movieList: 'movieList',
      MovieFullInfo: 'movieFullInfo',
    };
    const viewTypeSelect = options('viewType', viewType, 'movieList', { display: 'select' });

    return <Header viewType={viewTypeSelect} />;
  });
