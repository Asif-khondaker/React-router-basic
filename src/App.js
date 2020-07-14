import React from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import { Shop } from './components/Shop'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CustomerDetails from './components/CustomerDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={CustomerDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

const home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)
  


export default App;
