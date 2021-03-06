import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

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
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => 
                    <>
                    <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td key={movie.genre._id}>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    </tr>  
                    <button className="btn btn-block btn-danger">Delete</button>
                <
                    )}
                </tbody>
            </table>           
        );
    }
}
export default Movies;
