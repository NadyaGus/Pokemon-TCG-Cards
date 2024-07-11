import { Component } from 'react';

import type { Pokemon } from '@/api/get-items';

import classes from './result-item.module.css';

export class ResultItem extends Component<Pokemon> {
  render(): React.ReactNode {
    return (
      <li className={classes.item}>
        <h3 className={classes.title}>{this.props.name}</h3>
        <img alt="alt" className={classes.image} src={this.props.images.small} />
        <p className={classes.description}>Set: {this.props.set.name}</p>
        <p className={classes.description}>Series: {this.props.set.series}</p>
      </li>
    );
  }
}
