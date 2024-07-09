import { type ChangeEvent, type FormEvent, type ReactNode, useState } from 'react';

import type { PageState } from '@/pages/main-page';

import { LS_KEY } from '@/utils/variables';

import classes from './search.module.css';

type SearchProps = Pick<PageState, 'handleSearchValue' | 'searchValue'>;

export const Search = (props: SearchProps): ReactNode => {
  const [inputValue, setInputValue] = useState(props.searchValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (): void => {
    const value = inputValue.trim();

    localStorage.setItem(LS_KEY, value);
    props.handleSearchValue(value);
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        className={classes.input}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
        placeholder="Search"
        type="search"
        value={inputValue}
      ></input>

      <button className={classes.button} type="submit">
        Search
      </button>
    </form>
  );
};
