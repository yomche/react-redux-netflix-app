import React from 'react';
import { render } from '@testing-library/react';

import { Logo } from '../logo/logo.component';

describe('< Logo /> component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
