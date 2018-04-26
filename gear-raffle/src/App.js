import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './main/Main';
import Navbar from './nav/nav'
import RaffleList from './raffle-list/raffle-list';
import RaffleCreator from './raffle-creator/raffle-creator';
import ViewItem from './view-item/view-item';
import RunRaffle from './runRaffle/runRaffle'
import createHistory from 'history/createBrowserHistory';
import Axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raffleItems: []
    }
    this.addRaffle = this.addRaffle.bind(this);
    this.history = createHistory();
    this.updateProps = this.updateProps.bind(this);
  }

  updateProps = () => {
    Axios.get("/api/raffle-items/")
      .then(
        (result) => {
          console.log("Here are results: ", result);
          this.setState({ raffleItems: result.data });
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      )
  }

  componentDidMount() {
    Axios.get("/api/raffle-items/")
      .then(
        (result) => {
          console.log("Here are results: ", result);
          this.setState({ raffleItems: result.data });
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      )
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
            <Route path='/item/:id' component={({ match }) => <ViewItem history={this.history} raffle={this.state.raffleItems.filter(item => {return match.params.id === item._id})[0]}/>} />
            <Route exact path='/admin' component={() => <RunRaffle raffles={this.state.raffleItems} updateProps={this.updateProps} />} />



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
