import React ,{Component}from 'react'
import Likes from './common/like'
import  TableHeader from './common/tableHeader';
class MoviesTable extends Component {
  
 columns = [
     {path:'title',label: 'Title'},
     {path:'genre.name',label: 'Genre'},
     {path:'numberInStock',label: 'Stock'},
     {path:'dailyReantalRate',label: 'Rate'},
     {},
     {}
    ]

    render() { 
      
        const {movies,onDelete,onLike} = this.props;

        return ( 
    
            <table className="table">
            <TableHeader columns={this.columns} sortColumn/>
            <tbody>
            {movies.map(movie => 
              
                <tr key={movie._id}>
                <td >{movie.title}</td>
                <td >{movie.genre.name}</td>
                <td >{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Likes onClick={() => onLike(movie)} liked={movie.liked}/></td>
                <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>  
                )}
            </tbody>          
         </table>
        );
    }
}
export default MoviesTable;
