import React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';

export const Cart = () => {
  const [cart, setCart] = useState([]);

    return (
        <>
        <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
      <h1 className='title'>CARRITO</h1>
      </>
    )
}