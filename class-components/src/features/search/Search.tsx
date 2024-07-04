import { type ChangeEvent, Component, type FormEvent } from 'react';

import { type State } from '@/pages/main-page';
import { LS_KEY } from '@/utils/variables';

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
