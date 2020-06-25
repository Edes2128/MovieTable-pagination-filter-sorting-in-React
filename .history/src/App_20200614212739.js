import React , {Component,Fragment}from 'react';
import './App.css';
//import Movies from './components/movies';
import Counters from './components/counters'
import Navbar from './components/navbar';

class App extends Component {
  
  state = { 
    counters: [
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
 }

 handleDelete = (counterID) =>{
      const counters = this.state.counters.filter(c => c.id !== counterID);
      this.setState({counters})
 }

 handleReset =() =>{
      const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
 };

 handleIncrement = counter => {

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        console.
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
 }
  render (){
  return (
    <Fragment>
    <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
          <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters} />
      </main>
      </Fragment>
  );
  }
}
export default App;
