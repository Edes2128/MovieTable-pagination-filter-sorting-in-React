import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import ListGroup from './common/listGroup';
import Likes from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';
import {getGenres} from '../services/fakeGenreService'

class Movies extends Component {
    state = { 
        movies: [],
        pageSize: 3,
        currentPage: 1,
        genres: [],
        selectedGenre: ,
     }

     componentDidMount(){

            this.setState({genres: getGenres(),movies: getMovies()})

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
                this.setState({selectedGenre: genre})
        }

    render() { 
            const {length : count} = this.state.movies
            const {pageSize,currentPage,movies: allMovies,selectedGenre} = this.state;

            if(count === 0) return <p>There are no movies in the database</p>
            
            const filtered = selectedGenre ? allMovies.filter(m => m.genre._id = selectedGenre._id) : allMovies;
            const movies = paginate(filtered,currentPage,pageSize);

        return (  
            <div className="container">
            <div className="row">

            <div className="col-3">
            
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />

            </div>
            <div className="col">

            <h3><i>Showing {filtered.length} movies from database</i> <i className="fa fa-database"></i></h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {movies.map(movie => 
                  
                    <tr key={movie._id}>
                    <td >{movie.title}</td>
                    <td >{movie.genre.name}</td>
                    <td >{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Likes onClick={() => this.handleLike(movie)} liked={movie.liked}/></td>
                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>  
                    )}
                </tbody>          
             </table>
             <Pagination itemsCount={filtered.length} pageSize={pageSize} onPageChange={this.handlePageChange} currentPage={currentPage} />

            </div>    
             </div>
             </div>          
        );
    }
}
export default Movies;
