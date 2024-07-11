import type { ChangeEvent, Dispatch, FormEvent, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '@/routes/router';
import { LS_KEY } from '@/utils/variables';

import classes from './search.module.css';

interface SearchProps {
  handleSearchValue: (value: string) => void;
  searchValue: string;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Search = (props: SearchProps): ReactNode => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(props.searchValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (): void => {
    const value = inputValue.trim();

    props.setPage(1);
    navigate(`${APP_ROUTES.page}/1`);

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
