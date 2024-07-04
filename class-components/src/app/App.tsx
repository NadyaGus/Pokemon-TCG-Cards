import { Component, type ReactNode } from 'react';

import { SearchPage } from '@/pages/main-page';

import classes from './app.module.css';

export class App extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={classes.app}>
          <SearchPage />
        </div>
      </>
    );
  }
}
