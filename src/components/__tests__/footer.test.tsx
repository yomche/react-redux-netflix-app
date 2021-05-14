import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '../footer/footer.component';

describe('< Footer /> component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
