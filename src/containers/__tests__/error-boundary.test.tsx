import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundaryMoviesList } from '../error-boundary';

describe('< ErrorBoundaryMoviesList /> ', () => {
  it('should set state "hasError: true"', () => {
    const component = shallow<ErrorBoundaryMoviesList>(
      <ErrorBoundaryMoviesList>
        <div />
      </ErrorBoundaryMoviesList>
    );
    component.instance().componentDidCatch();

    expect(component.state().hasError).toBeTruthy();
  });

  it('should render error line when "hasError: true"', () => {
    const component = shallow<ErrorBoundaryMoviesList>(
      <ErrorBoundaryMoviesList>
        <div />
      </ErrorBoundaryMoviesList>
    );
    component.instance().componentDidCatch();

    expect(component.text()).toBe(' Something went wrong while loading movies data');
  });
});
