import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Controls } from '../components/controls/controls-component';

export default {
  title: 'Components/Controls',
  component: Controls,
};

const Template: Story<ComponentProps<typeof Controls>> = (args) => <Controls {...args} />;

export const Primary = Template.bind({});
Primary.args = {};