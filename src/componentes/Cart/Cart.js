import React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Routes, Route, Link, } from "react-router-dom";
import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { ItemCart } from '../CartItem/ItemCart';

export const Cart = () => {
  const {cart, totalPrice} = useCartContext();

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
      </>
    )
}