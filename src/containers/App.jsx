import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Services from './Services';
import PatientCenter from './PatientCenter';
import Providers from './Providers';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/patient-center">
          <PatientCenter />
        </Route>
        <Route path="/providers">
          <Providers />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
