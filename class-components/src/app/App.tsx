import { Component, type ReactNode } from 'react';

import { ErrorButton } from '@/features/error/error-button';
import { Loader } from '@/features/loader/loader';
import { Search } from '@/features/search/search';

import classes from './app.module.css';

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
