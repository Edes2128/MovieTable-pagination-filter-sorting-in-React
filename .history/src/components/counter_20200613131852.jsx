import React, { Fragment,Component } from 'react';


class Counter extends Component {

    state = {

        count: 0,

    };

    render() { 

        return (
            
            <Fragment>
            <span>{}</span>
            <button>Increment</button> 
            </Fragment>
    
            ) ;
            

    }
}
 
export default Counter;