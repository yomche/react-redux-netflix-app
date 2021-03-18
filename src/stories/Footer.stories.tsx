import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Footer } from '../components/footer/footer-component';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template: Story<ComponentProps<typeof Footer>> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};