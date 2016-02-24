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
              <li><a href="#">Examples</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
          </div>
        </div>
        <div className="container block">
          <h2>This is kind of awesome</h2>
          <p>
            And if you don't believe me you can <a href="">eat a lemon</a>.
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
