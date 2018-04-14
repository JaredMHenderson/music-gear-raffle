import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './main/Main';
import Navbar from './nav/nav'
import RaffleList from './raffle-list/raffle-list';
import RaffleCreator from './raffle-creator/raffle-creator'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "raffleItems": [{
        imageUrl: 'https://media.sweetwater.com/api/i/q-82__ha-3d0905afc12f193c__hmac-d8d5a6ef1d7361381c0b3dca237102cb195bf41e/images/items/750/LB417-large.jpg',
        itemName: '14x6.5 Black Beauty With Imperial Lugs',
        condition: 'Like New',
        ticketPrice: 10,
      }]
    }
    this.addRaffle = this.addRaffle.bind(this)
    this.history = createBrowserHistory();
  }

  addRaffle(raffle) {
    const raffleItems = [...this.state.raffleItems];
    raffleItems.push({ raffleItems });
  }

  render() {
    return (
      <Router history={this.history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={() => <RaffleList raffles={this.state.raffleItems} history={this.history} />} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/create-raffle' component={RaffleCreator} />
            <Route path='/item' component={() => <ViewItem history={this.history} />} />

            {/* <Route exact path='/login' component={Login} /> */}
            {/* <Route exact path='/signout' component={Signout} /> */}
          </Switch>

        </div>



      </Router>
    );
  }
}
//pull from database

export default App;
