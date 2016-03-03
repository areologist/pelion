import * as actions from '../action-types';
// temp code
import projects from './projects';

const activeProject = (state = null, action) => {
  if (action.type === actions.PROJECT_EDIT) {
    // BS temp code
    return projects().find(p => p.id === parseInt(action.id, 10));
  }
  return state;
};

export default activeProject;
