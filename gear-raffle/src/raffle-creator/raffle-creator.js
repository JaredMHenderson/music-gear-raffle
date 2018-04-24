import React, { Component } from 'react'

import './raffle-creator.css'

export default class RaffleCreator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            itemName: null,
            condition: null,
            imageUrl: null,
            ticketPrice: null,
            minimumTickets: null,
            raffleStartDate: null,
            raffleEndDate: null,

        }
        this.onKeyUpItemName = this.onKeyUpItemName.bind(this);
        this.onChangeCondition = this.onChangeCondition.bind(this);
        this.onKeyUpimageUrl = this.onKeyUpimageUrl.bind(this);
        this.onKeyUpTicketPrice = this.onKeyUpTicketPrice.bind(this);
        this.onKeyUpMinimumTickets = this.onKeyUpMinimumTickets.bind(this);
        this.onChangeRaffleStart = this.onChangeRaffleStart.bind(this);
        this.onChangeRaffleEnd = this.onChangeRaffleEnd.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onKeyUpItemName(event) {
        this.setState({ ...this.state, itemName: event.target.value });
    }

    onChangeCondition(event) {
        this.setState({ ...this.state, condition: event.target.value });
    }

    onKeyUpimageUrl(event) {
        this.setState({ ...this.state, imageUrl: event.target.value });
    }

    onKeyUpTicketPrice(event) {
        this.setState({ ...this.state, ticketPrice: event.target.value });
    }
    onKeyUpMinimumTickets(event) {
        this.setState({ ...this.state, minimumTickets: event.target.value });
    }
    onChangeRaffleStart(event) {
        this.setState({ ...this.state, raffleStartDate: event.target.value });
    }

    onChangeRaffleEnd(event) {
        this.setState({ ...this.state, raffleEndDate: event.target.value });
    }


    onClickSubmit = (event) => {
        fetch("/api/raffleItem", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="container raffleCreator">
                <div className="row">
                    <div className="col-md-10">
                        <h4>Tell us about what you&#39;re selling</h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputEmail4">Item Name</label>
                        <input onKeyUp={this.onKeyUpItemName} type="text" className="form-control" id="inputEmail" placeholder="eg: Classic Series '60s Stratocaster" />
                    </div>
                    <div className="form-group col-md-5">
                        <label for="condition">Condition</label>
                        <select onChange={this.onKeyUpCondition} className="form-control" id="condition">
                            <option>Brand New</option>
                            <option>Mint</option>
                            <option>Excellent</option>
                            <option>Very Good</option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Poor</option>
                            <option>None Functioning</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputAddress">Image URL</label>
                        <input onKeyUp={this.onKeyUpimageUrl} type="text" className="form-control" id="inputAddress" placeholder="Image URL" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputAddress2">Ticket Price</label>
                        <input onKeyUp={this.onKeyUpTicketPrice} type="text" className="form-control" id="inputAddress2" placeholder="Ticket Price" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="minimumTickets">Minimum Tickets</label>
                    <input onKeyUp={this.onKeyUpMinimumTickets} className="form-control" type="number" placeholder="100" id="minimumTickets" />
                </div>
                <div className="form-group">
                    <label for="example-date-input" className="col-2 col-form-label">Raffle Start Date</label>

                    <input onChange={this.onChangeRaffleStart} className="form-control" type="date" placeholder="2011-08-19" id="raffleStartDate" />
                </div>
                <div className="form-group">
                    <label for="example-date-input" className="col-2 col-form-label">Raffle End Date</label>

                    <input onChange={this.onChangeRaffleEnd} className="form-control" type="date" placeholder="2011-08-19" id="raffleEndDate" />
                </div>
                <button onClick={this.onClickSubmit} id="submit-button" className="btn btn-dark">Create Raffle</button>
            </div>
        )
    }
}
