import './projects.styl';
import React from 'react';
import NavLink from '../components/nav-link';

class Projects extends React.Component {

  render() {
    return (
      <div className="section">
        <h2>Projects</h2>
        <p>
          Welcome to the projects dashboard.
        </p>

        <ul role="nav">
          <li><NavLink to="/project/35">Project 35</NavLink></li>
          <li><NavLink to="/project/39">Project 39</NavLink></li>
        </ul>

        { this.props.children }

      </div>
    );
  }
}

export default Projects;
