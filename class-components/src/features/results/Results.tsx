import { Component } from 'react';

import type { ResponseData } from '../search/api/get-items';

import { Loader } from '../loader/loader';
import { getItems } from '../search/api/get-items';
import { ResultItem } from './result-item/result-item';

interface State {
  isLoading: boolean;
  response?: ResponseData | void;
  searchValue: string;
}

export class Results extends Component<State> {
  state: State;

  constructor(props: State) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      searchValue: props.searchValue,
    };
  }

  componentDidMount(): void {
    getItems(this.state.searchValue)
      .then((response) => this.setState({ response }))
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps: Readonly<State>): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ isLoading: true });
      getItems(this.props.searchValue)
        .then((response) => this.setState({ response }))
        .catch((err) => console.error(err))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>Results</h2>
        {this.state.response?.data.map((item) => <ResultItem key={item.id} {...item} />)}
        <Loader isLoading={this.state.isLoading} />
      </div>
    );
  }
}
