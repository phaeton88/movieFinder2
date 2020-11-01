import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import home from './home';
import movie from './movie';


import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Movie Finder</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/movie/:id" component={movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
