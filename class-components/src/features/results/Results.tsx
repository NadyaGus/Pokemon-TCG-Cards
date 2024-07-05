import { Component } from 'react';

import type { ResponseData } from '../search/api/get-items';

import { getItems } from '../search/api/get-items';
import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface ResultsState {
  handleLoading: (isLoading: boolean) => void;
  isLoading: boolean;
  response?: ResponseData | void;
  searchValue: string;
}

export class Results extends Component<ResultsState> {
  state: ResultsState;

  constructor(props: ResultsState) {
    super(props);
    this.state = {
      handleLoading: props.handleLoading,
      isLoading: props.isLoading,
      searchValue: props.searchValue,
    };
  }

  componentDidMount(): void {
    getItems(this.state.searchValue)
      .then((response) => this.setState({ response }))
      .catch((err) => console.error(err))
      .finally(() => this.state.handleLoading(false));
  }

  componentDidUpdate(prevProps: Readonly<ResultsState>): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.state.handleLoading(true);
      getItems(this.props.searchValue)
        .then((response) => this.setState({ response }))
        .catch((err) => console.error(err))
        .finally(() => this.state.handleLoading(false));
    }
  }

  render(): React.ReactNode {
    if (this.state.response?.data && this.state.response?.data.length > 0) {
      return (
        <ul className={classes.list}>
          {this.state.response?.data.map((item) => <ResultItem key={item.id} {...item} />)}
        </ul>
      );
    }

    return (
      <div>
        <h2>No results</h2>
      </div>
    );
  }
}
