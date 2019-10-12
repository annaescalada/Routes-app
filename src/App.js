import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Private from './pages/Private';
import Details from './pages/Details';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/private' exact component={Private}/>
        <Route path='/private/search' exact component={Details}/>
        <Route component={NotFound}/>
      </Switch>
      </div>
    </Router>

  );
}

export default App;
