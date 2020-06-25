import React from 'react'
import Likes from './common/like'

const MoviesTable = (props) => {

    const {movies,onDelete,onLike,onSort} = props;

    return ( 

        <table className="table">
        <thead>
            <tr>
                <th onClick={}>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
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
 
export default MoviesTable;
