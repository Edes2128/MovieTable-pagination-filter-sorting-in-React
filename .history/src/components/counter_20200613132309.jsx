import React, { Fragment,Component } from 'react';


class Counter extends Component {

    state = {

        count: 0,

    };

    render() { 

        return (
            
            <Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button> 
            </Fragment>
    
            ) ;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }

}
 
export default Counter;