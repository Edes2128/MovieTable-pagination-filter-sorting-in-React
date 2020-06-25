import React, { Component } from 'react'


class Like extends Component {

    render() { 

        let classes = "fa fa-heart"
        if(this.props.liked){
            return classes;

        }else{

            classes += "fa fa-heart-o"

        }

        return ( <i class={classes} aria-hidden="true"></i> );
    }
}
 
export default Like;
