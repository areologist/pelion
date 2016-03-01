import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Home!</h1>
        <p>Okay then.</p>
        { this.props.children }
      </div>
    );
  }
}

export default Home;
