import React from 'react'

const ListGroup = (props) => {


        const {items} = props;

    return <ul className="list-group">
    {items.map}
        <li className="list-group-item"></li>
    </ul>;

}

export default ListGroup;