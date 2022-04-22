import React from 'react';
import { Link } from 'react-router-dom';
import style from './FormHeader.module.css';

const FormHeader = (props) => {
  return (
    <div className={style['form-header']}>
      <a href="/">HOME</a>
      <Link
        className={style['login-button']}
        to={`/${props.link ? 'login' : 'signup'}`}
        onClick={props.changeLink}
      >
        {props.link ? 'Login' : 'Signup'}
      </Link>
    </div>
  );
};

export default FormHeader;
