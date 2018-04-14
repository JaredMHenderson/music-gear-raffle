import React, { Component } from 'react';
import './raffle-card.css';
import StripeCheckout from 'react-stripe-checkout';
import keys from '../config/keys.js';
import axios from 'axios';



export default class RaffleCard extends Component 
{
    // constructor(props) 
    // {
    //   super(props)   
    // }

    
    handleToken = async (token) => {
        const res = await axios.post('/api/stripe', token);
        console.log(res);
        }

    testRequest = async () => {
        const res = await axios.get("/");
        console.log(res);
    }
    
    componentDidMount(){
        this.testRequest();
    }

    render() 
    {
        const {imageUrl, itemName, condition, ticketPrice} = this.props.raffle;
        return (
            <div className="card">
                <img className="card-img-top" src={imageUrl} alt="Item Pic"/>
                    <div className="card-body">
                        <h5 className="card-title"><span>Item:</span>{itemName}</h5>
                        <p><span>Condition:</span>{condition}</p>
                        <p><span>Ticket Price: $</span>{ticketPrice}</p> 
                        <a href="#" className="btn btn-primary">Buy Ticket</a>

                        <StripeCheckout
                            token={this.handleToken}
                            stripeKey={keys.stripePublishableKey}
                            amount={ticketPrice}/>

                       
                    </div>


            </div>
            
        );
    }
}
    
  

