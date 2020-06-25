import React , {Component}from 'react';
import './App.css';
//import Movies from './components/movies';
import Counters from './components/counters'
import Navbar from './components/navbar';

class App extends Component {
  
  render (){
  return (
      <main className="container">
      <Navbar
          <Counters />
      </main>
  );
  }
}
export default App;
