import { Component } from 'react';

import { Loader } from '@/features/loader/loader';
import { Results } from '@/features/results/results';
import { type ResponseData } from '@/features/search/api/get-items';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

export interface State {
  handleSubmitValue: (value: string) => void;
  response?: ResponseData | void;
  searchValue: string;
}

export class SearchPage extends Component {
  loader = new Loader({});

  state: State = {
    handleSubmitValue: this.handleSubmitValue.bind(this),
    searchValue: localStorage.getItem(LS_KEY) ?? '',
  };

  handleSubmitValue(value: string): void {
    this.setState({ searchValue: value });
  }

  render(): React.ReactNode {
    return (
      <>
        <Search handleSubmitValue={this.state.handleSubmitValue} searchValue={this.state.searchValue} />
        <Results searchValue={this.state.searchValue} />
      </>
    );
  }
}
