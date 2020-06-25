import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    
    render() { 
            const {onReset,counters,onIncrement,onDelete} = this.props;

        return ( 
            <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => <Counter key={counter.id} onIncrement={this.props.onIncrement} onDelete={onDelete} counter={counter}></Counter>)}
            </div> );
    }
}
export default Counters;
