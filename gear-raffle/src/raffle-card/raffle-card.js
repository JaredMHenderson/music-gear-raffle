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
        axios.post('/api/stripe', { ...token, price: this.props.raffle.ticketPrice * 100 }).then(response => {
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
                <img className="card-img-top" src={imageUrl} alt="Item Pic" />
                <div className="card-body">
                    <h5 className="card-title"><span>Item:</span>{itemName}</h5>
                    <p><span>Condition:</span>{condition}</p>
                    <p><span>Ticket Price: $</span>{ticketPrice}</p>
                    <p><span>Mininum Required Tickets: </span>{minimumTickets}</p>
                    <p><span>Raffle Start Date: </span>{raffleStartDate}</p>
                    <p><span>Raffle End Date: </span>{raffleEndDate}</p>
                    <button onClick={this._getItem} className="btn btn-primary" data-id={_id}>Buy Ticket</button>


                    <StripeCheckout
                        token={this.onToken.bind(this)}
                        stripeKey={keys.stripePublishableKey}
                        amount={ticketPrice * 100} />
                </div>
            </div>

        );
    }
}
