import './header.styl';
import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <h1>Pelion</h1>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#">Why</a></li>
              <li><a href="#">Why Not</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
