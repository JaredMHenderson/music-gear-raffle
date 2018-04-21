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
        ticketPrice: null,
        itemId: null,
        name: null,
        email: null

      }

      this.onKeyUpParticipantName = this.onKeyUpParticipantName.bind(this);
      this.onKeyUpParticipantEmail = this.onKeyUpParticipantEmail.bind(this);

    }

    onKeyUpParticipantName(event) {
        this.setState({ ...this.state, name: event.target.value });
        console.log(this.state.name);
    }

    onKeyUpParticipantEmail(event) {
        this.setState({ ...this.state, email: event.target.value });
        console.log(this.state.email);
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
              itemId: itemId,
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

    onConfirmClick(event){
      event.preventDefault();
      let buttonId = document.getElementById("buy-confirm").getAttribute("data-id");
      console.log(buttonId);


      axios({
        method: 'post',
        url: '/api/raffleItem/participant/' + buttonId,
        data: {
          name: this.state.name,
          email: this.state.email
              }
            }).bind(this);
    }






    render()
    {
      const { itemName, imageUrl, ticketPrice, condition } = this.state;
      // if(itemName && imageUrl && ticketPrice && condition) {
        return (
          <div>
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
                    <button className="btn btn-secondary" data-toggle="modal" data-target="#buyTicketModal">Add To Cart</button>
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
            {/* <!-- Buy Raffle Ticket Modal --> */}


            <div className="modal fade" id="buyTicketModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            // <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" onKeyUp={this.onKeyUpParticipantName} className="form-control" id="buy-ticket-name" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" onKeyUp={this.onKeyUpParticipantEmail} className="form-control" id="buy-ticket-email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Number of Tickets</label>
                                    <input type="text" className="form-control" id="buy-ticket-number" placeholder="Number of tickets" />
                                </div>
                                <button onClick={this.onConfirmClick} id="buy-confirm" data-id={this.state.itemId} className="btn btn-secondary">Proceed to Payment</button>
                            // </form>
                        </div>
                    </div>

                </div>
            </div>

            </div>

        );
      // }
      // else {
      //   return (
      //     <div>
      //     <p>Loading.......</p></div>
      //   );
      // }
    }
}

export default ViewItem;
