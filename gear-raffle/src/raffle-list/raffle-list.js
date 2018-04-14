import React, { Component } from 'react'
import './raffle-list.js';
import RaffleCard from '../raffle-card/raffle-card';
import Axios from 'axios';



export default class RaffleList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('here are my props', this.props);
        return (
            <div className="raffle-list">
                {
                    this.props.raffles.map((raffle) => {
                        return (
                            < RaffleCard raffle={raffle} history={this.props.history} />
                        )
                    })
                }
            </div>
        );
    }
}
