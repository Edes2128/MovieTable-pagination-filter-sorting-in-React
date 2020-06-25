import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        return ( 
            <div>
            <button onClick={this.props.} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => <Counter key={counter.id} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter={counter}></Counter>)}
            </div> );
    }
}
export default Counters;
