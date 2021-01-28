import React, { Component } from 'react'
import './App.css';
import Cart from './Cart';
import Navigation from './Navigation';

class App extends Component {

  state={
    
  }

  render(){
    console.log('rendered');
    const{products} = this.state
  return (
    <div className="App">
      <Navigation />
      <Cart products={products} />
    </div>
  );
}
}

export default App;
