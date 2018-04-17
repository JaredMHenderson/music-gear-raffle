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
        this.onKeyUpCondition = this.onKeyUpCondition.bind(this);
        this.onKeyUpimageUrl = this.onKeyUpimageUrl.bind(this);
        this.onKeyUpTicketPrice = this.onKeyUpTicketPrice.bind(this);
        this.onKeyUpMinimumTickets = this.onKeyUpMinimumTickets.bind(this);
        this.onKeyUpRaffleStart = this.onKeyUpRaffleStart.bind(this);
        this.onKeyUpRaffleEnd = this.onKeyUpRaffleEnd.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);

    }

    onKeyUpItemName(event) {
        this.setState({ ...this.state, itemName: event.target.value });
    }

    onKeyUpCondition(event) {
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
    onKeyUpRaffleStart(event) {
        this.setState({ ...this.state, raffleStartDate: event.target.value });
    }

    onKeyUpRaffleEnd(event) {
        this.setState({ ...this.state, raffleEndDate: event.target.value });
    }

    onClickSubmit(event) {

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
            <div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputItemName">Item Name</label>
                        <input onKeyUp={this.onKeyUpItemName} type="text" className="form-control" id="inputItemName" placeholder="Item Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCondition">Condition</label>
                        <input onKeyUp={this.onKeyUpCondition} type="text" className="form-control" id="inputCondition" placeholder="Condition" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputImageUrl">Image URL</label>
                    <input onKeyUp={this.onKeyUpimageUrl} type="text" className="form-control" id="inputImageUrl" placeholder="Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputTicketPrice">Ticket Price</label>
                    <input onKeyUp={this.onKeyUpTicketPrice} type="text" className="form-control" id="inputTicketPrice" placeholder="Ticket Price" />

                </div>
                <div className="form-group">
                    <label htmlFor="minimumTickets">Minimum Tickets</label>
                    <input onKeyUp={this.onKeyUpMinimumTickets} className="form-control" type="number" placeholder="100" id="minimumTickets" />
                </div>
                <div className="form-group">
                    <label for="example-date-input" className="col-2 col-form-label">Raffle Start Date</label>

                    <input onChange={this.onKeyUpRaffleStart} className="form-control" type="date" placeholder="2011-08-19" id="raffleStartDate" />
                </div>
                <div className="form-group">
                    <label for="example-date-input" className="col-2 col-form-label">Raffle End Date</label>

                    <input onChange={this.onKeyUpRaffleEnd} className="form-control" type="date" placeholder="2011-08-19" id="raffleEndDate" />
                </div>
                <button onClick={this.onClickSubmit} id="submit-button" className="btn btn-primary">Create Raffle</button>
            </div>
        )
    }

}