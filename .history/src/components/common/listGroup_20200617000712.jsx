import React from 'react'

const ListGroup = (props) => {

        const {items, textProperty,valueProperty} = props;

    return <ul className="list-group mt-5">
        {items.map(item => (
            <li key={item[valueProperty]} className="list-group-item">{item[textProperty]}</li>
        ))}   
    </ul>
    ;
}

ListGroup.defaultProps = {
    
    textProperty


};
export default ListGroup;
