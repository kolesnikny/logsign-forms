import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <div className={style['header']}>
      <a href="/">
        <img
          alt="squadhelp"
          src="data:image/png;base64,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"
        />
      </a>
      <Link
        className={style['login-button']}
        to={`/${props.link ? 'login' : 'signup'}`}
        onClick={props.changeLink}
      >
        <span>{props.link ? 'Login' : 'Signup'}</span>
      </Link>
    </div>
  );
};

export default Header;
