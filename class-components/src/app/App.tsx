import { Component, type ReactNode } from 'react';

import { Search } from '@/features/search/Search';

import classes from './App.module.css';

export class App extends Component {
  render(): ReactNode {
    return (
      <div className={classes.app}>
        <h1>App</h1>
        <Search />
      </div>
    );
  }
}
