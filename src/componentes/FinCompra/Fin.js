import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext';
import * as firebase from "firebase/app";

export const Fin = () => {
// Generar numero de orden

    return (
        <>
            <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
            <h1 className='title'> ¡Gracias por su compra! </h1>
            
        </>
    );
}