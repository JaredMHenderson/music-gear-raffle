import React, { Component } from 'react'
import './runRaffleCard.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Moment from 'react-moment';

Moment.globalFormat = 'MMMM Do YYYY';

class RunRaffleCard extends Component {



    state = {
        goToItem: false,
        itemId: null
    };


    _getItem = (event) => {

        console.log("Clicked!!");
        let itemId = event.target.attributes["data-id"].value;
        console.log("These are props from card:", itemId);
        console.log(this.props);
        this.setState({ itemId, goToItem: true });
    }

    runRaffle = (event) => {
        console.log("click worked");
        const { imageUrl, itemName, condition, minimumTickets, raffleStartDate, raffleEndDate, ticketPrice, _id, participants } = this.props.raffle;
        if (participants.length < minimumTickets) {
          alert("Minimum tickets amount is not met");
        }
        else {
          let winner = participants[Math.floor(Math.random()*participants.length)];
          console.log(winner.email);
        }
    }

    render() {
        const { imageUrl, itemName, condition, minimumTickets, raffleStartDate, raffleEndDate, ticketPrice, _id, participants } = this.props.raffle;
        if (this.state.goToItem) {
            return <Redirect to={`/item/${this.state.itemId}`} />;
        }

        return (
          <div className="card">
            <div className="imageContainer justify-content-center">
              <img className="card-img-top image" src={imageUrl} alt="Item Pic"/>
            </div>
              <div className="card-body">
                  <h5 id="title" className="card-title">{itemName}</h5>
                    <p id="body">
                      <span>Condition: </span>{condition}
                        <br/>
                      <span>Ticket Price: $</span>{ticketPrice}
                        <br/>
                      <span>Mininum Required Tickets: </span>{minimumTickets}
                        <br/>
                      <span>Raffle Start: </span><Moment>{raffleStartDate}</Moment>
                        <br/>
                      <span>Raffle End: </span><Moment>{raffleEndDate}</Moment>
                    </p>
                    <button onClick={this.runRaffle} className="btn-sm btn-dark" data-id={_id}>Run Raffle</button>
                </div>
            </div>

        );
    }
}

export default RunRaffleCard;
