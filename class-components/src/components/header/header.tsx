import { Component } from 'react';

import classes from './header.module.css';

const TASK_LINK = 'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md';

export class Header extends Component {
  render(): React.ReactNode {
    return (
      <header className={classes.header}>
        <div className={classes.content}>
          <h1 className={classes.title}>Pokémon TCG Cards</h1>
          <a className={classes.link} href={TASK_LINK} rel="noreferrer" target="_blank">
            About Task
          </a>
        </div>
      </header>
    );
  }
}
