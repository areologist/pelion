import './project.styl';
import React from 'react';

class Project extends React.Component {

  render() {
    return (
      <div className="section">
        <h2>Project { this.props.params.id }</h2>
        <p>
          And this is some kind of project.
        </p>
      </div>
    );
  }
}

export default Project;
