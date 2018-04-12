import React, { Component } from 'react'
import './raffle-card.css';



export default class RaffleCard extends Component 
{
    // constructor(props) 
    // {
    //   super(props)   
    // }

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
                    </div>
            </div>
            
        );
    }
}
    
  

