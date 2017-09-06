import 'aframe';
import 'aframe-particle-system-component';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import VRScene from './routes/VRScene';
import Gallery from './routes/Gallery';

const NoMatch = ({ location }) => (
  <section className="flex items-center flex-column justify-center h-100 bg-washed-blue">
    <header class="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l w-100 tc code mb3 fw9 dib tracked-tight light-purple">
        404
      </h1>
      <h2 className="tc f1-l fw1">
        Sorry, we couldn't find <code>{location.pathname}</code>
      </h2>
    </header>
    <Link to="/" className="f5 f4-ns link black db pv2 ph3 hover-light-purple">
      <p className="fw1 i tc mt4 mt5-l f4 f3-l pointer">
        Head back home maybe?
      </p>
    </Link>
  </section>
);

// All the routes of our app
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Gallery} />
      <Route path="/vr" exact component={VRScene} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default Routes;
