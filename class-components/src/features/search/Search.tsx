import { type ChangeEvent, Component, type FormEvent } from 'react';

import { LS_KEY } from '@/utils/variables';

import classes from './search.module.css';

interface SearchState {
  handleSearchValue: (value: string) => void;
  searchValue: string;
}

export class Search extends Component<SearchState> {
  state: SearchState;

  constructor(props: SearchState) {
    super(props);
    this.state = {
      handleSearchValue(value) {
        props.handleSearchValue(value);
      },
      searchValue: props.searchValue,
    };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(): void {
    localStorage.setItem(LS_KEY, this.state.searchValue);
    this.state.handleSearchValue(this.state.searchValue);
  }

  render(): React.ReactNode {
    return (
      <form
        className={classes.form}
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <input
          className={classes.input}
          onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
          placeholder="Search"
          type="search"
          value={this.state.searchValue}
        ></input>
        <button className={classes.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}
