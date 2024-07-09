import type { ReactNode } from 'react';

import logo from './assets/rsschool-logo.svg';

import classes from './footer.module.css';

const COURSE_LINK = 'https://rs.school/courses/reactjs';
const GITHUB_LINK = 'https://github.com/NadyaGus';

export const Footer = (): ReactNode => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <a className={classes.link} href={COURSE_LINK} rel="noreferrer" target="_blank">
          <img alt="RSSchool-logo" className={classes.logo} src={logo} />
        </a>
        <p>2024</p>
        <a href={GITHUB_LINK} rel="noreferrer" target="_blank">
          GitHub
        </a>
      </div>
    </footer>
  );
};
