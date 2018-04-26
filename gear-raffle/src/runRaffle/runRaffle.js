import React, { Component } from 'react'
import './runRaffle.css'
import RunRaffleCard from './runRaffleCard';

class RunRaffle extends Component {

  constructor(props) {
      super(props)

      this.state =
      {
        hello: 'false'
      }
      this.updateProps = this.updateProps.bind(this);

    };


    updateProps = () => {
      console.log('invoked');
      this.setState({hello: 'world'});
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
      console.log('Props on Raffle', this.props);
        return (
            <div className="raffle-list">
                {
                    this.filterDeleted(this.props.raffles).map((raffle, index) => {
                        return (
                            < RunRaffleCard key={index} raffle={raffle} history={this.props.history} updateProps={this.props.updateProps} />
                        )
                    })
                }
            </div>
        );


    }

}

export default RunRaffle;
