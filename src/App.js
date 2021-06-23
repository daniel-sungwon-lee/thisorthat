import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
