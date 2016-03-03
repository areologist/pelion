import { combineReducers } from 'redux';
import projects from './projects';
import activeProject from './active-project';

const rootReducer = combineReducers({
  projects,
  activeProject
});

export default rootReducer;
