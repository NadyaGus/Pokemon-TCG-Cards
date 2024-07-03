import { type ChangeEvent, Component, type FormEvent } from 'react';

import { LS_KEY } from '@/utils/variables';

import { getItems } from './api/getItems';

export class Search extends Component {
  state = {
    value: localStorage.getItem(LS_KEY) ?? '',
  };

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(): Promise<void> {
    localStorage.setItem(LS_KEY, this.state.value);
    const response = await getItems().catch((err) => console.error(err));
    console.log(response);
  }

  render(): React.ReactNode {
    return (
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          this.handleSubmit().catch((err) => console.error(err));
        }}
      >
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
          placeholder="Search"
          type="search"
          value={this.state.value}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
