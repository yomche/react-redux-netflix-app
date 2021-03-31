import React from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundaryMoviesList extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  public render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <h1 style={{ textAlign: 'center', color: 'red' }}>
            {' '}
            Something went wrong while loading movies data
          </h1>
        </div>
      );
    }
    return children;
  }
}
