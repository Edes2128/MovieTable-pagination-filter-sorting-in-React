import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import ListGroup from './common/listGroup';
import Likes from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
     }
     handleDelete = (movie) => {
            const movies  = this.state.movies.filter(m => m._id !== movie._id);
            this.setState({movies})
     }

     handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
         movies[index].liked = !movies[index].liked;
        this.setState({movies});
        };

        handlePageChange = (page) => {
            this.setState({currentPage : page})
        }

    render() { 
            const {length : count} = this.state.movies
            const {pageSize,currentPage,movies: allMovies} = this.state;

            if(count === 0) return <p>There are no movies in the database</p>

            const movies = paginate(allMovies,currentPage,pageSize);

        return (  
            <div className="container">
            <div className="row">

            <div className="col-2"></div>
            <div className="col">
            </div>    
             </div>
             </div>          
        );
    }
}
export default Movies;
