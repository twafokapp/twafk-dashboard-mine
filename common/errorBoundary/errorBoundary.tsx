import React from 'react';
import { ErrorComponent } from './errorComponent';

interface IErrorBoundaryProps {
  readonly children: React.ReactNode;
}

interface IErrorBoundaryState {
  readonly error: Error | null;
  readonly errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundaryComponent extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  readonly state: IErrorBoundaryState = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent error={this.state.error} errorInfo={this.state.errorInfo} />;
    }
    return this.props.children;
  }
}

// export default ErrorBoundary;
