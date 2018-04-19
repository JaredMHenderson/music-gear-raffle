import React, { Component } from 'react'
import './view-item.css';
import axios from 'axios';

class ViewItem extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {

        imageUrl: null,
        itemName: null,
        condition: null,
        ticketPrice: null
      }
    }

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
              imageUrl: result.data[0].imageUrl,
              itemName: result.data[0].itemName,
              condition: result.data[0].condition,
              ticketPrice: result.data[0].ticketPrice,
              raffleStartDate: result.data[0].raffleStartDate,
              raffleEndDate: result.data[0].raffleEndDate
            });
          },
          (error) => {
            if(error) {
              console.log(error);
            }
          }
        )
    }

    render()
    {
      const { itemName, imageUrl, ticketPrice, condition, raffleStartDate, raffleEndDate } = this.state;
      if(itemName && imageUrl && ticketPrice && condition && raffleStartDate && raffleEndDate) {
        return (
            <div>
              <div className="container item">
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-md-10">
                    <h4 className="headline">{ itemName }</h4>
                      <h6 className="condition">Condition: { condition }</h6>
                  </div>
                  <div className="col-md-1">
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-md-6">
                    <img className="imgContainer" src={ imageUrl } />
                  </div>
                  <div className="col-md-4">
                    <h5 className="subHead">Raffle Details</h5>
                      <p className="raffleDets">Price per ticket: { ticketPrice }</p>
                      <p className="raffleDets">Raffle Start Date: { raffleStartDate }</p>
                      <p className="raffleDets">Raffle End Date: { raffleEndDate }</p>
                      <button className="btn btn-dark">Add to Cart</button>
                  </div>
                  <div className="col-md-1">
                  </div>
                </div>
              </div>
            </div>
        );
      }
      else {
        return (
          <div>
          <p>Loading.......</p></div>
        );
      }
    }
}

export default ViewItem;
