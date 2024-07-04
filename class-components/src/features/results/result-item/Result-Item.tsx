import { Component } from 'react';

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
      <li>
        <h3>{this.props.name}</h3>
        <img alt="alt" src={this.props.images.small} />
      </li>
    );
  }
}
