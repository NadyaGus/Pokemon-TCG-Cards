import { Component } from 'react';

import { Loader } from '../loader/loader';
import { type ResponseData, getItems } from '../search/api/get-items';
import { ResultItem } from './result-item/result-Item';

export interface State {
  response?: ResponseData | void;
  searchValue: string;
}

export class Results extends Component<State> {
  loader: Loader;
  state: State;

  constructor(props: State) {
    super(props);
    this.state = { searchValue: props.searchValue };
    this.loader = new Loader({});
  }

  componentDidMount(): void {
    getItems()
      .then((response) => this.setState({ response }))
      .catch((err) => console.error(err))
      .finally(() => this.loader.hide());
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>Results</h2>
        {this.state.response?.data.map((item) => <ResultItem key={item.name} {...item} />)}
        {this.loader.render()}
      </div>
    );
  }
}
