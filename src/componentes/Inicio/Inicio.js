import React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Routes, Route, } from "react-router-dom";

export const Inicio = () => {
    return (
        <>
        <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
      <h1 className='title'> BIENVENIDOS  A MUNDO TAZAS</h1>
      </>
    )
}