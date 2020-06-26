import React ,{Component}from 'react'
import Likes from './common/like'
import Table fr
class MoviesTable extends Component {
  
 columns = [
     {path:'title',label: 'Title'},
     {path:'genre.name',label: 'Genre'},
     {path:'numberInStock',label: 'Stock'},
     {path:'dailyRentalRate',label: 'Rate'},
     {key:'like',content: movie => <Likes onClick={() => this.props.onLike(movie)} liked={movie.liked}/>},
     {key:'delete',content:movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>}
    ]
    render() { 
      
        const {movies,onSort,sortColumn} = this.props;

        return ( 
    
    
        );
    }
}
export default MoviesTable;
