import React, { Component } from 'react'
import './raffle-card.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import 'moment';

import StripeCheckout from 'react-stripe-checkout';
import keys from '../config/keys.js';
import axios from 'axios';

export default class RaffleCard extends Component {
    constructor(props) {
        super(props);

        this._getItem = this._getItem.bind(this);
        this.state = {
            goToItem: false,
            itemId: null
        };
    };

    onToken(token) {
        console.log(token);
        const userData = token;
        axios.post('/api/stripe', token).then(response => {
            console.log('\n \n \n \n \n \n \nLookie the response', response);
            console.log(`We are in business, ${response.email}`);

        });
    };

    _getItem(event) {

        console.log("Clicked!!");
        let itemId = event.target.attributes["data-id"].value;
        console.log("These are props from card:", itemId);
        console.log(this.props);
        this.setState({ itemId, goToItem: true });
    }



    render() {
        const { imageUrl, itemName, condition, minimumTickets, raffleStartDate, raffleEndDate, ticketPrice, _id } = this.props.raffle;

        if (this.state.goToItem) {
            return <Redirect to={`/item/${this.state.itemId}`} />;
        }
        // use moment to format raffleEndDate
        return (
            <div className="card">
              <div className="imageContainer">
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
                        <span>Raffle Start: </span>{raffleStartDate}
                          <br/>
                        <span>Raffle End: </span>{raffleEndDate}
                      </p>
                    <button onClick={this._getItem} className="btn-sm btn-dark" data-id={_id}>Buy Ticket</button>

                    <StripeCheckout
                        token={this.onToken}
                        stripeKey={keys.stripePublishableKey}
                        amount={ticketPrice * 100} />
                </div>
            </div>

        );
    }
}
