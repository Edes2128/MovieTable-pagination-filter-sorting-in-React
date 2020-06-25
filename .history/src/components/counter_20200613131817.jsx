import React, { Fragment,Component } from 'react';


class Counter extends Component {

    state = {

        count: 0,

    };

    render() { 

        return (
            
            <Fragment>
            <h1>Heyy</h1>
            <button>Increment</button> 
            </Fragment>
    
            ) ;
            

    }
}
 
export default Counter;