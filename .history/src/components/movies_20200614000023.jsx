import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 

        movies: getMovies(),

     }
    render() { 
        return (  

            table.table>thead>tr>th
            
        );
    }
}
 
export default Movies;