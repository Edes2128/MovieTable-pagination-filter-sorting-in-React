import React, { Component } from 'react';

class Counter extends Component {
 
    render() { 

        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIn} className="btn btn-secondary btn-sm">Increment</button> 
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>

            ) ;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
export default Counter;
