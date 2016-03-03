import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProject } from '../actions';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);

    // temp bs
    this.props.editProject(props.params.id);
  }

  render() {
    if (!this.props.project) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="section">
        <h2>Project {this.props.project.id}</h2>
        <h4>{this.props.project.name}</h4>
        <p>
          {this.props.project.description}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.activeProject
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
