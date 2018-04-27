import React, { Component } from 'react'
import './runRaffleCard.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import axios from 'axios';




import Moment from 'react-moment';


Moment.globalFormat = 'MMMM Do YYYY';

class RunRaffleCard extends Component {


  constructor(props) {
      super(props)

      this.state =
      {
        raffleDone: false
      }
      this.runRaffle = this.runRaffle.bind(this);
      this.deleteRaffle = this.deleteRaffle.bind(this);

    };


    runRaffle(event) {



        const { imageUrl, itemName, condition, minimumTickets, raffleStartDate, raffleEndDate, ticketPrice, _id, participants, raffleDone, deleted } = this.props.raffle;
        if (!raffleDone) {
          if (participants.length < minimumTickets) {
            alert("Minimum tickets amount is not met");
          }
          else {
            let winner = participants[Math.floor(Math.random()*participants.length)];
            console.log(winner.email);
            let itemId = event.target.attributes["data-id"].value;
            this.setState({raffleDone: true}, function() {
              console.log("Raffle Done:", this.state.raffleDone);
              axios.put('/api/raffleItem/' + itemId, { raffleDone: this.state.raffleDone }).then(response => {
              console.log('Success', response);
              alert("And the winner is: " + winner.email);
              this.props.updateProps();
              });
            });


        }



        }
        else {
          alert("This Raffle is closed");
        }
    }

    deleteRaffle = (event) => {

        const { imageUrl, itemName, condition, minimumTickets, raffleStartDate, raffleEndDate, ticketPrice, _id, participants, raffleDone, deleted } = this.props.raffle;

        let itemId = event.target.attributes["data-id"].value;
        axios.put('/api/raffleItem/' + itemId, { deleted: true})
        .then( response => {
              console.log('Success', response);
              this.props.updateProps();
            })
              .catch(err => {
                console.log(err)

        });


    }

    render() {
        const { imageUrl, itemName, condition, minimumTickets, raffleStartDate, raffleEndDate, ticketPrice, _id, participants, raffleDone, deleted } = this.props.raffle;
        let deleteButton;

        if (!deleted) {
          deleteButton = <button onClick={this.deleteRaffle} className="btn btn-dark delete-button" data-id={_id}>Delete</button>
        }

        return (

          <div className="card">
            <div className="imageContainer justify-content-center">
              <img className="card-img-top image" src={imageUrl} alt="Item Pic"/>
            </div>
              <div className="card-body">
                  <h5 id="title" className="card-title">{itemName}</h5>
                    <h4 className="deleted">{deleted ? 'Deleted': ''}</h4>
                    <p id="body">
                      <span>Condition: </span>{condition}
                        <br/>
                      <span>Ticket Price: $</span>{ticketPrice}
                        <br/>
                      <span>Minimum Required Tickets: </span>{minimumTickets}
                        <br/>
                      <span>Number of Participants: </span>{participants.length}
                        <br/>
                      <span>Raffle Start: </span><Moment>{raffleStartDate}</Moment>
                        <br/>
                      <span>Raffle End: </span><Moment>{raffleEndDate}</Moment>
                    </p>
                   <button onClick={this.runRaffle} className="btn btn-dark" data-id={_id}>{raffleDone ? 'Closed' : 'Run Raffle'}</button>
                      {deleteButton}
                </div>
            </div>


        );

    }
}

export default RunRaffleCard;
