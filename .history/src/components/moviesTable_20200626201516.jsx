import React ,{Component}from 'react'
import Likes from './common/like'
import  TableHeader from './common/tableHeader';
import TableBody from './common/tableBody'
class MoviesTable extends Component {
  
 columns = [
     {path:'title',label: 'Title'},
     {path:'genre.name',label: 'Genre'},
     {path:'numberInStock',label: 'Stock'},
     {path:'dailyReantalRate',label: 'Rate'},
     {key:'like',conte},
     {key:'delete'}
    ]
    render() { 
      
        const {movies,onDelete,onLike,onSort,sortColumn} = this.props;

        return ( 
    
            <table className="table">
            <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody  data={movies} columns={this.columns}/>
             
         </table>
        );
    }
}
export default MoviesTable;
