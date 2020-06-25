import React from 'react'
import _ from 'loda'
const Pagination = (props) => {

    const {itemsCount,pageSize}  = props;

        const pagesCount = itemsCount / pageSize;

    return <nav>
        <ul className="pagination">
            <li className="page-item"><a  className="page-link">1</a></li>
        </ul>
    </nav>
}
 
export default Pagination;
