import { Component } from 'react';

import logo from './assets/rsschool-logo.svg';

import classes from './footer.module.css';

const GITHUB_LINK = 'https://github.com/NadyaGus';

export class Footer extends Component {
  render(): React.ReactNode {
    return (
      <footer className={classes.footer}>
        <div className={classes.content}>
          <img alt="RSSchool-logo" className={classes.logo} src={logo} />
          <p>2024</p>
          <a href={GITHUB_LINK}>GitHub</a>
        </div>
      </footer>
    );
  }
}
