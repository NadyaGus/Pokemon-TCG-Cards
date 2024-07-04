import { Component } from 'react';

import classes from './loader.module.css';

export class Loader extends Component {
  isShowing = true;

  hide(): void {
    this.isShowing = false;
  }

  render(): React.ReactNode {
    return <div className={this.isShowing ? classes.loader : classes.hidden}>Loading...</div>;
  }

  show(): void {
    this.isShowing = true;
  }
}
