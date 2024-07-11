import { Component } from 'react';

import classes from './loader.module.css';

interface LoaderProps {
  isLoading: boolean;
}

export class Loader extends Component<LoaderProps> {
  render(): React.ReactNode {
    return (
      <div className={this.props.isLoading ? classes.loader : classes.hidden}>
        <div className={classes.image}></div>
      </div>
    );
  }
}
