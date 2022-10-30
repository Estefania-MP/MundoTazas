import React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Routes, Route, Link, NavLink, } from "react-router-dom";
import { useCartContext } from '../../Context/CartContext';
import { ItemCart } from '../CartItem/ItemCart';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

export const Cart = () => {

//Generar la ordne de compra
const {cart, totalPrice} = useCartContext();

const order = {

    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

//Boton de generar orden
const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }


  if (cart.length === 0){
    return(
      <>
      <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
      <h1 className='title'>CARRITO</h1>
      <p className='title'> Aun no hay productos en el carrito</p>
      <Link className='btnlink' to='/'>Ir a comprar</Link>
      </>
    );
  }
    return (
        <>
        <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
      <h1 className='title'>CARRITO</h1>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p className='totalCart' >
        Total: ${totalPrice()}
      </p>
      <NavLink to='/check' className='btnCart' onClick={handleClick} >Generar orden de compra</NavLink>
      </>
    )
}