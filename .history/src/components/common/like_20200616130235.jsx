import React, { Component } from 'react'


const Like = (props) => {

    render() { 

        let classes = "fa fa-heart"
        if(!props.liked)  classes += "-o"

        return ( <i onClick={this.props.onClick} style={{cursor:"pointer"}} className={classes} aria-hidden="true"></i> );
    }
}
 
export default Like;
