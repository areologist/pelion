// temp code ftw

import * as actions from './action-types';

export function editProject(id) {
  return {
    type: actions.PROJECT_EDIT,
    id
  };
}

export function addProject(project) {
  return {
    type: actions.PROJECT_ADD,
    project
  };
}
