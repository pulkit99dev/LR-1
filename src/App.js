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
    const index = products.indexOf(product);

    const docRef =this.db.collection('products').doc(products[index].id)
    console.log(docRef)
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(()=>{
        console.log('Updated')
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  render(){
    console.log('rendered');
    const{products} = this.state
  return (
    <div className="App">
      <Navigation />
      <Cart 
        products={products}
        increasePrice={this.increaseQtyHandler}
      />
    </div>
  );
}
}

export default App;
