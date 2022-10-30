import React, { useEffect, useState } from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Routes, Route, useParams, } from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export const Inicio = () => {
  const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');
        getDocs (queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}) )))
         

    }, [id])

    return (
        <>
        <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
      <h1 className='title'> BIENVENIDOS  A MUNDO TAZAS</h1>
      <ItemList data={data}/>
      </>
    )
}