import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

     }
    render() { 
        return (  

                 <p>{this.state.movies.map(moie)}</p>

        );
    }
}
 
export default Movies;