import React, { Fragment,Component } from 'react';


class Counter extends Component {

    state = {

        count: 0,

    };

    render() { 

        return (
            
            <Fragment>
            <span>{this.formatCount}</span>
            <button>Increment</button> 
            </Fragment>
    
            ) ;
    }

    formatCount(){

        const {count} = th

        return this.state.count === 0 ? 'Zero' : this.state.count;

    }

}
 
export default Counter;