import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';
import {getGenres} from '../services/fakeGenreService'
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        pageSize: 3,
        currentPage: 1,
        genres: [],
        selectedGenre: {},
        sortColumn: {path: 'title',order:'asc'}
     }

     componentDidMount(){
            const genres = [{_id: "", name: 'All Genres'},...getGenres()]
            this.setState({genres,movies: getMovies()})

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

        handleGenreSelect = (genre) => {
                this.setState({selectedGenre: genre,currentPage: 1})
        }

        handleSort = path => {
                const sortColumn = {...this.state.sortColumn};
                if(sortColumn === path){}

                this.setState({sortColumn: { path, order: 'asc'}})
        }

    render() { 
            const {length : count} = this.state.movies
            const {pageSize,currentPage,movies: allMovies,selectedGenre,sortColumn} = this.state;

            if(count === 0) return <p>There are no movies in the database</p>
            
            const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
           const sorted =  _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
            const movies = paginate(sorted,currentPage,pageSize);

        return (  
            <div className="container">
            <div className="row">
            <div className="col-3">
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
            </div>
            <div className="col">
            <h3><i>Showing {filtered.length} movies from database</i> <i className="fa fa-database"></i></h3>
            <MoviesTable movies={movies} onDelete={this.handleDelete} onLike={this.handleLike} onSort={this.handleSort} />
             <Pagination itemsCount={filtered.length} pageSize={pageSize} onPageChange={this.handlePageChange} currentPage={currentPage} />
            </div>    
             </div>
             </div>          
        );
    }
}
export default Movies;
