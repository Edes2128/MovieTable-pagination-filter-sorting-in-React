import React, { Component } from 'react'


class Like extends Component {

    render() { 

        let classes = "fa fa-heart"
        

        return ( <i class={classes} aria-hidden="true"></i> );
    }
}
 
export default Like;
