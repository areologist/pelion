import React from 'react';
import { connect } from 'react-redux';

import NavLink from '../components/nav-link';

class Projects extends React.Component {

  renderList() {
    return this.props.projects.map(project => (
      <li key={project.id}>
        <NavLink to={`/project/${project.id}`}>{project.name}</NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className="section">
        <h2>Projects</h2>
        <p>
          Welcome to the projects dashboard.
        </p>

        <ul role="nav">
          {this.renderList()}
        </ul>

        { this.props.children }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(Projects);
