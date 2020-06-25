import React from 'react'

const ListGroup = (props) => {

        const {items, textProperty,valueProperty,onItemSelect ,selectedItem} = props;

    return <ul className="list-group mt-5">
        {items.map(item => (
            <li onClick={()=> onItemSelect(item)} key={item[valueProperty]} className={selectedItem === item ? "list-group-item active": "list-group-item"} style={{cursor:"pointer"}}>{item[textProperty]}</li>
        ))}   
    </ul>
    ;
}
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
export default ListGroup;
