import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Header } from '../components/header/header-component';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template: Story<ComponentProps<typeof Header>> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};