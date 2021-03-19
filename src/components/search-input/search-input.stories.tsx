import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { SearchInput } from './search-input.component';

export default {
  title: 'Components/Search Input',
  component: SearchInput,
};

const Template: Story<ComponentProps<typeof SearchInput>> = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
