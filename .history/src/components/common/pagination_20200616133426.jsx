import React from 'react'
import _ from 'lodash';
const Pagination = (props) => {

    const {itemsCount,pageSize}  = props;

        const pagesCount = itemsCount / pageSize;

     const pages =  _.range(1,pagesCount + 1)


    return <nav>
        <ul className="pagination">
        {pages.map(page => {

        })}
            
        </ul>
    </nav>
}
 
export default Pagination;
