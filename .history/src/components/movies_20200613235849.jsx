import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

     }
    render() { 
        return (  

                <h1>List of movies is: {this.state.movies.length}</h1>
        
        );
    }
}
 
export default Movies;