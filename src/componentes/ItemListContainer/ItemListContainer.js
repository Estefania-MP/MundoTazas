import React from 'react';
import { useState, useEffect } from 'react';
import { ItemList } from "../ItemList/ItemList";
import {  useParams} from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";



export const ItemListContainer = ({}) => {
    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');

        if (id) {
            const queryFilter = query(queryCollection, where('category', '==', id))
        getDocs (queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}) )))
         }else {
            getDocs (queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}) )))
         }
         
        

    }, [id])


  return (
      <>
      <h1 className='title'> PRODUCTOS</h1>
      <ItemList data={data}/>
      </>
  );
}

export default ItemListContainer;