import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/main';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Project from './pages/project';

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/project/:id" component={Project} />
    <Route path="/about" component={About} />
  </Route>
);
