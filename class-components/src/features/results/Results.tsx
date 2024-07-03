import { Component } from 'react';

import { type Pokemon } from '../search/api/get-items';
import { ResultItem } from './result-item/result-Item';

interface Props {
  list: Pokemon[];
}
export class Results extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>Results</h2>
        {this.props.list.map((item) => (
          <ResultItem key={item.name} {...item} />
        ))}
      </div>
    );
  }
}
