import React from 'react'
import  TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = (props) => {

    const {columns,sortColumn,onSort,}

    return (     
 <table className="table">
    <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody  data={movies} columns={this.columns}/>
 </table> );
}
 
export default Table;