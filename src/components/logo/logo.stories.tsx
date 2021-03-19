import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Logo } from './logo.component';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template: Story<ComponentProps<typeof Logo>> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
