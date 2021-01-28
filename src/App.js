import React, { Component } from 'react'
import './App.css';
import Cart from './Cart';
import Navbar from './Navigation';
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

  decreaseQtyHandler =(product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id)
    docRef
      .update({
        qty: products[index].qty -1
      })
      .then(()=>{
        console.log('Updated')
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  deleteItem=(id)=>{
    const{products}= this.state;

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log('Deleted')
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      title: 'Bottle',
      price: 1000,
      qty: 1,
      img:''
    })
    .then((docRef)=>{
      console.log(docRef)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  totalCount=() =>{
    const {products} = this.state;
    let amount = 0;
    products.map((product)=>{
      amount= amount + product.qty * product.price
    })
    return amount;
  }

  counting=()=>{
    const{products} = this.state;
    let count=0
    products.forEach((product)=>{
      count += product.qty
    })
    return count;
  }

  render(){
    console.log('rendered');
    const{products} = this.state
  return (
    <div className="App">
      <Navbar count={this.counting()}/>
      <h1>Cart</h1>
      <button onClick={this.addProduct}>Add Product</button>
      <Cart 
        products={products}
        increasePrice={this.increaseQtyHandler}
        decreasePrice={this.decreaseQtyHandler}
        deleteProduct={this.deleteItem}
        addProductItem={this.addProduct}
      />
      <h3>Total Amount = {this.totalCount()}</h3>
    </div>
  );
}
}

export default App;
