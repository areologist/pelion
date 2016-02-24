import './main.styl';
import React from 'react';
import Header from './header';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container section">
          <h2>A Heading of Some Sort</h2>
          <p>
            And this is bogus content of some sort.
            <a href="">Enjoy</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
