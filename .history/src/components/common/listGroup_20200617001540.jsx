import React from 'react'

const ListGroup = (props) => {

        const {items, textProperty,valueProperty,onItemSelect} = props;

    return <ul className="list-group mt-5">
        {items.map(item => (
            <li onClick={()=> onItemSelect(item._id)} key={item[valueProperty]} className="list-group-item" style={{cursor:}}>{item[textProperty]}</li>
        ))}   
    </ul>
    ;
}

ListGroup.defaultProps = {
    
    textProperty: "name",
    valueProperty: "_id"

};
export default ListGroup;
