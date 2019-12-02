import React from 'react';

import logo from '../../assets/marvel.svg';

import './styles.scss';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
          <img src={logo} alt="Marvel" />
          <p>Comics</p>
      </div>
    </header>
  );
}
