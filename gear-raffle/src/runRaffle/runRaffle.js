import React, { Component } from 'react'
import './runRaffle.css'
import RunRaffleCard from './runRaffleCard';

class RunRaffle extends Component {

    state = {


    }



    render() {
        return (
            <div className="raffle-list">
                {
                    this.props.raffles.map((raffle, index) => {
                        return (
                            < RunRaffleCard key={index} raffle={raffle} history={this.props.history} />
                        )
                    })
                }
            </div>
        );


    }

}

export default RunRaffle;