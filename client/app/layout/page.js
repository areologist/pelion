import './page.styl';
import React from 'react';
import Header from './header';
import Footer from './footer';

class Page extends React.Component {
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

export default Page;
