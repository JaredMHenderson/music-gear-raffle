import React, { Component } from 'react'
import './raffle-card.css';



export default class RaffleCard extends Component 
{
    constructor(props) 
    {
      super(props)   
    }

    render() 
    {
        const {url, item, condition, ticketPrice} = this.props.raffle;
        return (
            <div className="raffle-card">
                <img src={url}/>
                <p><span>Item:</span>{item}</p>
                <p><span>Condition:</span>{condition}</p>
                <p><span>Ticket Price:</span>{ticketPrice}</p>                
            </div>
        );
    }
}
    
  

