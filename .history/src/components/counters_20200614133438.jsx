import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = { 

        counters: [{id:1,value}]
     }
    render() { 
        return ( 
            <div>
                    <Counter/>
                    <Counter/>
                    <Counter/>
                    <Counter/>
            </div> );
    }
}
export default Counters;
