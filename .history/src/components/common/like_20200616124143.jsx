import React, { Component } from 'react'


class Like extends Component {

    render() { 

        let classes = "fa fa-heart"
        if(this.props.li)

        return ( <i class={classes} aria-hidden="true"></i> );
    }
}
 
export default Like;
