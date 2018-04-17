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
              ticketPrice: result.data[0].ticketPrice
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
      const { itemName, imageUrl, ticketPrice, condition } = this.state;
      if(itemName && imageUrl && ticketPrice && condition) {
        return (
            <div className="view-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 item-title b-white">
                    <h1>{ itemName }</h1>
                    <p>Listed by me</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 item-description">
                    <img className="imgContainer" src={ imageUrl } />
                  </div>

                  <div className="col-md-4 item-price">
                    <h1>Price:{ ticketPrice }</h1>
                    <button>Add to Cart</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 b-white">
                    <h2>Condition { condition }</h2>
                    <p>Some text</p>
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
