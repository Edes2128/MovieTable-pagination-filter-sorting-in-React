import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
imrc
class Movies extends Component {
    state = { 

        movies: getMovies(),

     }
    render() { 
        return (  

            <>
                 {this.state.movies.map(movie => <p>{movie.title}</p>)}
            </>
        );
    }
}
 
export default Movies;