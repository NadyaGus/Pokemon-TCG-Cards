import { type ChangeEvent, Component, type FormEvent } from 'react';

import { LS_KEY } from '@/utils/variables';

import { Results } from '../results/Results';
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

    response?.data.forEach((item) => {
      console.log(item.name);
    });
  }

  render(): React.ReactNode {
    return (
      <>
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

        <Results
          list={[
            { images: { small: '' }, name: '1' },
            { images: { small: '' }, name: '2' },
          ]}
        />
      </>
    );
  }
}
