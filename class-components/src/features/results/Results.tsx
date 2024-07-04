import { Component } from 'react';

import type { ResponseData } from '../search/api/get-items';

import { Loader } from '../loader/loader';
import { getItems } from '../search/api/get-items';
import { ResultItem } from './result-item/result-item';

export interface State {
  response?: ResponseData | void;
  searchValue: string;
}

export class Results extends Component<State> {
  loader: Loader;
  state: State;

  constructor(props: State) {
    super(props);
    this.state = {
      searchValue: props.searchValue,
    };
    this.loader = new Loader({});
  }

  componentDidMount(): void {
    getItems(this.state.searchValue)
      .then((response) => this.setState({ response }))
      .catch((err) => console.error(err))
      .finally(() => this.loader.hide());
  }

  componentDidUpdate(prevProps: Readonly<State>): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      getItems(this.props.searchValue)
        .then((response) => this.setState({ response }))
        .catch((err) => console.error(err));
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>Results</h2>
        {this.state.response?.data.map((item) => <ResultItem key={item.id} {...item} />)}
        {this.loader.render()}
      </div>
    );
  }
}
