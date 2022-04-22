import React from 'react';
import { Link } from 'react-router-dom';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style['startpage-container']}>
      <h1>Welcom guest</h1>
      <Link to="/signup">SignUp</Link>
    </div>
  );
};

export default HomePage;
