import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

     }
    render() { 
        return (  

            <>
                <h1>List of movies is: {}</h1>
                 {this.state.movies.map(movie => <p>{movie.title}</p>)}
            </>
        );
    }
}
 
export default Movies;