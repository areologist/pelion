import './main.styl';
import React from 'react';
import Header from './header';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h2>A Heading of Some Sort</h2>
          <p>
            And this is in fact content of some sort. Enjoy.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
