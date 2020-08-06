import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { About } from './views/About';
import { Command } from './views/Command';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="page-content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/commands/:id'>
              <Command />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
