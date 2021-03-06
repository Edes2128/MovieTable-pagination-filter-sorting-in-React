import React ,{Component}from 'react'
import Likes from './common/like'



class MoviesTable extends Component {
  
    raiseSort = pa

    render() { 
      
        const {movies,onDelete,onLike,onSort} = this.props;

        return ( 
    
            <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort('title')}>Title</th>
                    <th onClick={() => onSort('genre.name')}>Genre</th>
                    <th onClick={() => onSort('numberInStock')}>Stock</th>
                    <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
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
