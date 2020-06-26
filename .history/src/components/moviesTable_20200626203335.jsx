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
     {key:'like',content: movie => <Likes onClick={() => this.props.onLike(movie)} liked={movie.liked}/>},
     {key:'delete',content:movie => <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>}
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
