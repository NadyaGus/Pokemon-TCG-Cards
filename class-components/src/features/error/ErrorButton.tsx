import { Component } from 'react';

export class ErrorButton extends Component {
  handleClick(): void {
    throw new Error('Error! Why are you doing this?');
  }
  render(): React.ReactNode {
    return <button onClick={() => this.handleClick()}>Error</button>;
  }
}
