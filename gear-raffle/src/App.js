import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path='/' component={Main} />
            {/* <Route exact path='/main' component={Main} /> */}
            {/* <Route exact path='/login' component={Login} /> */}
            {/* <Route exact path='/signout' component={Signout} /> */}
          </Switch>

        </div>



        </Router>
    );
  }
}

export default App;
