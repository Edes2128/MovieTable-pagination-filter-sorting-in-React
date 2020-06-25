import React from 'react'

const ListGroup = (props) => {


        const {items} = props;

    return <ul className="list-group">

        {items.map(item => (

            <li key={item.} className="list-group-item">{item}</li>

        ))}

        
    </ul>
    ;

}

export default ListGroup;