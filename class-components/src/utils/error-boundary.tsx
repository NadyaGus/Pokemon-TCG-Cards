import { Component } from 'react';
import { type ErrorInfo } from 'react-dom/client';

interface Props {
  children?: React.ReactNode;
}

interface State {
  error: Error | null;
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { error: null, hasError: false };
  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Sorry. Something went wrong...</h1>;
    }

    return this.props.children;
  }
}
