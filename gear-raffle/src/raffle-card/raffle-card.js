import React, { Component } from 'react'
import './raffle-card.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Moment from 'react-moment';

import keys from '../config/keys.js';
import axios from 'axios';

Moment.globalFormat = 'MMMM Do YYYY';

export default class RaffleCard extends Component {
    constructor(props) {
        super(props);

        this._getItem = this._getItem.bind(this);
        this.state = {
            goToItem: false,
            itemId: null
        };
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
                    <button onClick={this._getItem} className="btn-sm btn-dark" data-id={_id}>View </button>

                </div>
            </div>

        );
    }
}
