import React , {Component,Fragment}from 'react';
import './App.css';
//import Movies from './components/movies';
import Counters from './components/counters'
import Navbar from './components/navbar';

class App extends Component {
  
  render (){
  return (
    <Fragment>
    <Navbar />
      <main className="container">
          <Counters />
      </main>
      </>
  );
  }
}
export default App;
