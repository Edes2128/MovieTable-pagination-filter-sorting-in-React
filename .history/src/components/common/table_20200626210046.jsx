import React from 'react'


const Table = (props) => {
    return (         <table className="table">
    <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody  data={movies} columns={this.columns}/>
 </table> );
}
 
export default Table;