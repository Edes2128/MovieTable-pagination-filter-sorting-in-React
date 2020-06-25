import React from 'react'
import _ from 'lodash';
const Pagination = (props) => {

    const {itemsCount,pageSize,onPageChange,currentPage}  = props;


    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages =  _.range(1,pagesCount + 1)
    return <nav>
        <ul className="pagination">
        {pages.map(page => (
            <li key={page} className={page === currentPage ? 'page-item ctive' : 'pagination=item'}><a onClick={()=>onPageChange(page)} style={{cursor:"pointer"}} className="page-link">{page}</a></li>
        ))}
            
        </ul>
    </nav>
}
export default Pagination;