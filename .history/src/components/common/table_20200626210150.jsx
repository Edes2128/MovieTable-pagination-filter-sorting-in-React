import React from 'react'
import  TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

const Table = (props) => {
    return (     
 <table className="table">
    <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody  data={movies} columns={this.columns}/>
 </table> );
}
 
export default Table;