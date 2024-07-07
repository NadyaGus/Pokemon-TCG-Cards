import { Component } from 'react';

import type { ResponseData } from '@/api/get-items';
import type { PageState } from '@/pages/main-page';

import { getItems } from '@/api/get-items';

import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface ResultsProps extends Omit<PageState, 'handleSearchValue'> {
  response?: ResponseData | void;
}

export class Results extends Component<ResultsProps> {
  state: ResultsProps;

  constructor(props: ResultsProps) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      searchValue: props.searchValue,
      setLoadingState: props.setLoadingState,
      timestamp: props.timestamp,
    };
  }

  componentDidMount(): void {
    getItems(this.state.searchValue)
      .then((response) => this.setState({ response }))
      .catch((err) => console.error(err))
      .finally(() => this.state.setLoadingState(false));
  }

  componentDidUpdate(prevProps: Readonly<ResultsProps>): void {
    if (prevProps.timestamp !== this.props.timestamp) {
      this.state.setLoadingState(true);
      getItems(this.props.searchValue ?? '')
        .then((response) => this.setState({ response }))
        .catch((err) => console.error(err))
        .finally(() => this.state.setLoadingState(false));
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

    if (this.state.response?.data.length === 0) {
      return (
        <div>
          <h2>No results</h2>
        </div>
      );
    }
  }
}
