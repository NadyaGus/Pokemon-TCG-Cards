import { Component } from 'react';

import classes from './result-item.module.css';

interface Props {
  images: { small: string };
  name: string;
}

export class ResultItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <li className={classes.item}>
        <h3>{this.props.name}</h3>
        <img alt="alt" className={classes.image} src={this.props.images.small} />
      </li>
    );
  }
}
