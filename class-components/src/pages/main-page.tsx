import { Component } from 'react';

import { Loader } from '@/features/loader/loader';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

export interface State {
  searchValue: string;
}

export class SearchPage extends Component {
  loader = new Loader({});

  state: State = { searchValue: localStorage.getItem(LS_KEY) ?? '' };

  render(): React.ReactNode {
    return (
      <>
        <Search searchValue={this.state.searchValue} />
        <Results searchValue={this.state.searchValue} />
      </>
    );
  }
}
