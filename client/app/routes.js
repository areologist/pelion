import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Page from './layout/page';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Project from './components/project';

module.exports = (
  <Route path="/" component={Page}>
    <IndexRoute component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/project/:id" component={Project} />
    <Route path="/about" component={About} />
  </Route>
);
