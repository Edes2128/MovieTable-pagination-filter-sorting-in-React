import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

     }
    render() { 
        return (  

                 {this.state.movies.map(movie => movie.title</p>)}

        );
    }
}
 
export default Movies;