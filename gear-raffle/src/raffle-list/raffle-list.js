import React, { Component } from 'react'
import './raffle-list.js';
import RaffleCard from '../raffle-card/raffle-card';
import Axios from 'axios';



export default class RaffleList extends Component {
    constructor(props) {
        super(props)
    }
    filterDeleted(arr) {
      const results = [];
      for (let item of arr) {
        if(!item.deleted) {
          results.push(item);
        }
      }
      return results;
    }
    render() {
        console.log('here are my props rafflelist', this.props.raffles);
        return (
            <div className="raffle-list">
                {
                    this.filterDeleted(this.props.raffles).map((raffle) => {

                        return (

                            < RaffleCard raffle={raffle} history={this.props.history} />

                        )

                    })
                }
            </div>
        );
    }
}
