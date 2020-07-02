import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '$components/Header';
import Footer from '$components/Footer';

import Home from './Home';
import Services from './Services';
import PatientCenter from './PatientCenter';
import ProvidersScreen from './ProvidersScreen';
import Contact from './Contact';
import Covid from './Covid';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/patient-center">
            <PatientCenter />
          </Route>
          <Route path="/providers">
            <ProvidersScreen />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/covid-notice">
            <Covid />
          </Route>
          <Route path="/" strict>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
