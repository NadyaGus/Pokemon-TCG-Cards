import { type ChangeEvent, Component, type FormEvent } from 'react';

import { LS_KEY } from '@/utils/variables';

import type { ResponseData } from './api/get-items';

interface State {
  handleSubmitValue: (value: string) => void;
  response?: ResponseData | void;
  searchValue: string;
}

export class Search extends Component<State> {
  state: State;

  constructor(props: State) {
    super(props);
    this.state = {
      handleSubmitValue(value) {
        props.handleSubmitValue(value);
      },
      searchValue: props.searchValue,
    };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(): void {
    localStorage.setItem(LS_KEY, this.state.searchValue);
    this.state.handleSubmitValue(this.state.searchValue);
  }

  render(): React.ReactNode {
    return (
      <>
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
            placeholder="Search"
            type="search"
            value={this.state.searchValue}
          ></input>
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
