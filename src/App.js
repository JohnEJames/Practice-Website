import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/Game1" component={Game1}/>
     <Route path="/Game2" component={Game2}/>
     <Route path="/Game3" component={Game3}/>
     </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
