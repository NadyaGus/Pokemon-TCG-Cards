import { Component, type ReactNode } from 'react';

import { ErrorButton } from '@/features/error/ErrorButton';
import { Loader } from '@/features/loader/Loader';
import { Search } from '@/features/search/Search';

import classes from './App.module.css';

const appLoader = new Loader({});

export class App extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={classes.app}>
          <ErrorButton />
          <h1>App</h1>
          <Search loader={appLoader} />
        </div>
      </>
    );
  }
}
