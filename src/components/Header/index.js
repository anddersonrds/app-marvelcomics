import React from 'react';
import { Link } from 'react-router-dom';

import me from '../../assets/me.jpeg';
import logo from '../../assets/marvel.svg';

import './styles.scss';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Marvel" />
        </Link>
        <a
          href="https://github.com/anddersonrs"
          target="_blank"
          className="profile"
        >
          <div>
            <strong>Anderson Rodrigues</strong>
            <span>anddersonrds@gmail.com</span>
          </div>
          <img src={me} alt="Profile" />
        </a>
      </div>
    </header>
  );
}
