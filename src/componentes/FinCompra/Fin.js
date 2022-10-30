import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export const Fin = () => {


    return (
        <>
            <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
            <h1 className='title'> ¡Gracias por su compra! </h1>
            
        </>
    );
}