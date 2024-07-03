import { type ChangeEvent, Component, type FormEvent } from 'react';

const LS_KEY = 'NadyaGus_search_key';

export class Search extends Component {
  state = {
    value: localStorage.getItem(LS_KEY) ?? '',
  };

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  handleSubmit(): void {
    localStorage.setItem(LS_KEY, this.state.value);
  }

  render(): React.ReactNode {
    return (
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
          value={this.state.value}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
