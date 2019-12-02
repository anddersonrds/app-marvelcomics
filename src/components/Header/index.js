import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/marvel.svg';

import './styles.scss';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Marvel" />
        </Link>
        <p>Comics</p>
      </div>
    </header>
  );
}
