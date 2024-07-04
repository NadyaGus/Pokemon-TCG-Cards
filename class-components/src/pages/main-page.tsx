import { Component } from 'react';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Loader } from '@/features/loader/loader';
import { Results } from '@/features/results/results';
import { Search } from '@/features/search/search';
import { LS_KEY } from '@/utils/variables';

interface PageState {
  handleLoading: (isLoading: boolean) => void;
  handleSubmitValue: (value: string) => void;
  isLoading: boolean;
  searchValue: string;
}

export class SearchPage extends Component {
  state: PageState = {
    handleLoading: this.handleLoading.bind(this),
    handleSubmitValue: this.handleSubmitValue.bind(this),
    isLoading: true,
    searchValue: localStorage.getItem(LS_KEY) ?? '',
  };

  handleLoading(isLoading: boolean): void {
    this.setState({ isLoading });
  }

  handleSubmitValue(value: string): void {
    this.setState({ searchValue: value });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Search handleSubmitValue={this.state.handleSubmitValue} searchValue={this.state.searchValue} />
        <Results
          handleLoading={this.state.handleLoading}
          isLoading={this.state.isLoading}
          searchValue={this.state.searchValue}
        />
        <Footer />
        <Loader isLoading={this.state.isLoading} />
      </>
    );
  }
}
