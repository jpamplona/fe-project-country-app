import React from 'react';
import { ErrorPage } from '../../components';

type IProps = {
};

type IState = {
  hasError: boolean
};

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <ErrorPage />;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;