import React from 'react'

const ListGroup = (props) => {

        const {items, textProperty,valueProperty,onItemSelect ,selectedGenre} = props;

    return <ul className="list-group mt-5">
        {items.map(item => (
            <li onClick={()=> onItemSelect(item)} key={item[valueProperty]} className={selectedGenre === item ? "list-group-item active": ""} style={{cursor:"pointer"}}>{item[textProperty]}</li>
        ))}   
    </ul>
    ;
}

ListGroup.defaultProps = {
    
    textProperty: "name",
    valueProperty: "_id"

};
export default ListGroup;
