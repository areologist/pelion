import './main.styl';
import React from 'react';
import Header from './header';
import Footer from './footer';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container main">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
