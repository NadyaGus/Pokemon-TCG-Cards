import { Component } from 'react';

import classes from './header.module.css';

import pokeball from '/pokeball.svg';

const TASK_LINK = 'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md';

export class Header extends Component {
  render(): React.ReactNode {
    return (
      <header className={classes.header}>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <img alt="Logotype" className={classes.logo} src={pokeball}></img>
            <h1 className={classes.title}>Pokémon TCG Cards</h1>
          </div>
          <a className={classes.link} href={TASK_LINK} rel="noreferrer" target="_blank">
            About Task
          </a>
        </div>
      </header>
    );
  }
}
