import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  ItemDetail  from "../ItemDetail/ItemDetail";
import  Productos  from "../Productos/Productos.json";
import { useEffect } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';



export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const {detalleId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'items', detalleId);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}) )
       
  }, [detalleId])


return (
  <>
  <h1 className='title'> DETALLES DEL PRODUCTO</h1>
  <ItemDetail data={data}/>
  </>
);
}

