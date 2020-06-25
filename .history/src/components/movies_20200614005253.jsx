import React, { Component } from 'react';
import {getMovies,deleteMovie} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

     }

     handleDelete = (movie) => {

            const movies  = this.state.movies.filter(m => m._id !== movie._id);
            this.setState({movies: movies})

     }

    render() { 
        return (  

            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => 
                    <>
                    <tr key={movie._id}>
                    <td key={movie.title}>{movie.title}</td>
                    <td key={movie.genre._id}>{movie.genre.name}</td>
                    <td key={movie.numberInStock}>{movie.numberInStock}</td>
                    <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>  
                </>
                    )}
                </tbody>
            </table>           
        );
    }
}
export default Movies;
