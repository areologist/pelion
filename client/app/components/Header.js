import './header.styl';
import React from 'react';
import NavLink from './nav-link';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <h1>
              <NavLink to="/" onlyActiveOnIndex>Pelion</NavLink>
            </h1>
          </div>
          <div className="navigation">
            <ul role="nav">
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
