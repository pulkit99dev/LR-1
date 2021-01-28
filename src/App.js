import React, { Component } from 'react'
import './App.css';
import Cart from './Cart';
import Navigation from './Navigation';
import firebase from 'firebase/app';

class App extends Component {

  constructor(){
    super();
  this.state={
    products:[],
    loading: true
  }
  this.db = firebase.firestore();
  }

  componentDidMount(){
    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
  }

  // Adding Qty
  increaseQtyHandler =(product)=>{
    const{products} = this.state;
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
