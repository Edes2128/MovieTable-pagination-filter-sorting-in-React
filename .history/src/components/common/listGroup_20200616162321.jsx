import React from 'react'

const ListGroup = (props) => {


        const {items} = props;

    return <ul className="list-group">

        {items.map(item => (



        ))}

        
    </ul>
    ;

}

export default ListGroup;