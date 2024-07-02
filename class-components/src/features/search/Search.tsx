import { type ChangeEvent, Component, type FormEvent } from 'react';

export class Search extends Component {
  state = {
    value: '',
  };

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  handleSubmit(): void {
    console.log(this.state.value);
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
      </form>
    );
  }
}
