

import React, { Component } from 'react';
import './raffle-card.css';

import StripeCheckout from 'react-stripe-checkout';
import keys from '../config/keys.js';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import $ from 'jquery';


export default class RaffleCard extends Component {
    constructor(props) {
        super(props);

        this._getItem = this._getItem.bind(this);
        this.state = {
            goToItem: false,
            itemId: null
        };
    };
    // componentWillMount(){
    //     this.testRequest();
    // }
    // handleToken (token) {
    //     axios.post('/api/stripe', {stripe: token}).then((data)=>{
    //          console.log(data);
    // });
    onToken(token) {
        console.log(token)
        const userData = token;
        axios.post('/api/stripe', token).then(response => {
            console.log( '\n \n \n \n \n \n \nLookie the response',response);
            console.log(`We are in business, ${response.email}`);
          
        });
      };


    // testRequest = async () => {
    //     const res = await axios.get("/"); 
    //     console.log(res);
    // }
    
    

    

    _getItem(event){

        console.log("Clicked!!");
        let itemId = event.target.attributes["data-id"].value;
        console.log("These are props from card:", itemId);
        console.log(this.props);
        this.setState({ itemId, goToItem: true });
    }
      
      //comment test



    render() {
        const { imageUrl, itemName, condition, ticketPrice, _id } = this.props.raffle;

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
                    <button onClick={this._getItem} className="btn btn-primary" data-id={_id}>Buy Ticket</button>

                          <StripeCheckout
                            token={this.onToken}
                            stripeKey={keys.stripePublishableKey}
                            amount={ticketPrice}/>
                </div>

            </div>

        );
    }
}
