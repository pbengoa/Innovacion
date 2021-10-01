import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Simulation from './components/views/simulation';
import Home from './components/views/homepage';
import { FooterContainer } from './containers/footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/simulacion' component={Simulation} />
        </Switch>
        <FooterContainer />
      </Router>
      
    </>
  );
}

export default App;
