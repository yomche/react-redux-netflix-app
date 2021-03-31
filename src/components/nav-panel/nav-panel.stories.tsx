import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { NavPanel } from './nav-panel.component';

export default {
  title: 'Components/Navigation Panel',
  component: NavPanel,
};

const Template: Story<ComponentProps<typeof NavPanel>> = (args) => <NavPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
