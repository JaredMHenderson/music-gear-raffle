import React, { Component } from 'react'
import './runRaffleCard.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import $ from 'jquery';




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
                <img className="card-img-top" src={imageUrl} alt="Item Pic" />
                <div className="card-body">
                    <h5 className="card-title"><span>Item:</span>{itemName}</h5>
                    <p><span>Condition:</span>{condition}</p>
                    <p><span>Ticket Price: $</span>{ticketPrice}</p>
                    <p><span>Mininum Required Tickets: </span>{minimumTickets}</p>
                    <p><span>Number of Participants: </span>{participants.length}</p>
                    <p><span>Raffle Start Date: </span>{raffleEndDate}</p>
                    <p><span>Raffle End Date: </span>{raffleEndDate}</p>

                    <button onClick={this.runRaffle} className="btn btn-primary" data-id={_id}>Run Raffle</button>
                </div>
            </div>

        );
    }
}

export default RunRaffleCard;
