import React, { Component } from 'react';
import './view-item.css';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import keys from '../config/keys.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Moment from 'react-moment';

Moment.globalFormat = 'MMMM Do YYYY';


class ViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      itemName: null,
      condition: null,
      ticketPrice: null,
      itemId: null,
      name: null,
      email: null,
      raffleStartDate: null,
      raffleEndDate: null
    }
  }


  onToken(token) {
    console.log(token);
    console.log(token.email);
    let idFromPath = window.location.pathname.split("/");
    let itemId = idFromPath[2];
    console.log("here is id: ", itemId);

    const userData = token;
    axios.post('/api/stripe', { ...token, price: this.props.raffle.ticketPrice * 100 }).then(response => {
      console.log('\n \n \n \n \n \n \nLookie the response', response);
      console.log(`We are in business, ${response.email}`);

    });

    axios.post('/api/raffleItem/participant/' + itemId, { ...token, email: token.email }).then(response => {
      console.log('Success', response);

    });

  };

  componentWillMount() {
    let idFromPath = window.location.pathname.split("/");
    let itemId = idFromPath[2];
    console.log("here is id: ", itemId);

    const currentState = this.state;
    console.log("I'm about to mount");
    axios.get("/api/raffleItem/" + itemId)
      .then(
        (result) => {
          console.log("Here are results: ", result);
          this.setState({
            ...currentState,
            itemId: itemId,
            imageUrl: result.data[0].imageUrl,
            itemName: result.data[0].itemName,
            condition: result.data[0].condition,
            ticketPrice: result.data[0].ticketPrice,
            raffleStartDate: result.data[0].raffleStartDate,
            raffleEndDate: result.data[0].raffleEndDate
          });
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      )
  }




  render() {
    const { itemName, imageUrl, ticketPrice, condition, raffleStartDate, raffleEndDate, itemId } = this.state;


    // if(itemName && imageUrl && ticketPrice && condition) {
    return (
      <div>
        <div className="view-item">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-10">
                <h4 className="headline">{itemName}</h4>
                <h6 className="condition">Condition: {condition}</h6>
              </div>
              <div className="col-md-1">
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-6">
                <img className="imgContainer" src={imageUrl} />
              </div>
              <div className="col-md-4">
                <h5 className="subHead">Raffle Details</h5>
                <p className="raffleDets">Price per ticket: {ticketPrice}</p>
                <p className="raffleDets">Raffle Start Date:<Moment>{raffleStartDate}</Moment></p>
                <p className="raffleDets">Raffle End Date:<Moment>{raffleEndDate}</Moment></p>

                <StripeCheckout
                  token={this.onToken.bind(this)}
                  stripeKey={keys.stripePublishableKey}
                  amount={ticketPrice * 100} />
              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ViewItem;
