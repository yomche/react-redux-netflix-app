import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  public render(): JSX.Element {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>Something went wrong</div>;
    }
    return children;
  }
}
