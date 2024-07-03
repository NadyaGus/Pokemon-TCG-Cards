import { type ChangeEvent, Component, type FormEvent } from 'react';

import { LS_KEY } from '@/utils/variables';

import type { Loader } from '../loader/loader';

import { Results } from '../results/results';
import { type Pokemon, getItems } from './api/get-items';

interface Props {
  loader: Loader;
}
interface State {
  response?: Pokemon[] | null;
  value: string;
}

export class Search extends Component<Props> {
  loader = this.props.loader;

  state: State = {
    value: localStorage.getItem(LS_KEY) ?? '',
  };

  constructor(props: Props) {
    super(props);
  }
  componentDidMount(): void {
    getItems()
      .then((response) => this.setState({ response: response?.data }))
      .catch((err) => console.error(err))
      .finally(() => this.loader.hideLoader());
  }

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  handleSubmit(): void {
    localStorage.setItem(LS_KEY, this.state.value);
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
            value={this.state.value}
          ></input>
          <button type="submit">Search</button>
        </form>

        <Results list={this.state.response ?? []} />
        {this.loader.render()}
      </>
    );
  }
}
