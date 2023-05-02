import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">English Dictionary</h1>
      <nav className="navigation">
        <ul className="navigation__links-list">
          <li className="navigation__link">
            <Link to="/">Words List</Link>
          </li>
          <li className="navigation__link">
            <Link to="/create">Creator</Link>
          </li>
          <li className="navigation__link">
            <Link to="/test">Tester</Link>
          </li>
          <li className="navigation__link">
            <Link to="/history">History</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
