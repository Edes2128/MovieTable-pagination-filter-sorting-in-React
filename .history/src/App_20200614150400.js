import React , {Component}from 'react';
import './App.css';
//import Movies from './components/movies';
import Counters from './components/counters'
import Navbar from './components/'

class App extends Component {
  
  render (){
  return (
      <main className="container">
          <Counters />
      </main>
  );
  }
}
export default App;
