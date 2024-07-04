import { Component } from 'react';

import type { ResponseData } from '../search/api/get-items';

import { getItems } from '../search/api/get-items';
import { ResultItem } from './result-item/result-item';

import classes from './results.module.css';

interface State {
  handleLoading: (isLoading: boolean) => void;
  isLoading: boolean;
  response?: ResponseData | void;
  searchValue: string;
}

export class Results extends Component<State> {
  state: State;

  constructor(props: State) {
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

  componentDidUpdate(prevProps: Readonly<State>): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.state.handleLoading(true);
      getItems(this.props.searchValue)
        .then((response) => this.setState({ response }))
        .catch((err) => console.error(err))
        .finally(() => this.state.handleLoading(false));
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2 className={classes.title}>Results:</h2>
        <ul className={classes.list}>
          {this.state.response?.data.map((item) => <ResultItem key={item.id} {...item} />)}
        </ul>
      </div>
    );
  }
}
