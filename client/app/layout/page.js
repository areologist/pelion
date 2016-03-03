import './page.styl';
import React from 'react';
import Header from './header';
import Footer from './footer';

const Page = ({ children }) => (
  <div>
    <Header />
    <div className="container main">
      {children}
    </div>
    <Footer />
  </div>
);

export default Page;
