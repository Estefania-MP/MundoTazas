import React from 'react';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

const producto = 
  {id: 1,
   title:"Deja que la adorable criaturita alienígena dé un toque de personalidad a tus meriendas con esta taza de Stitch. El adorable diseño presenta una ilustración del personaje de tipo boceto. Capacidad: 475 ml aprox 13 × 9 cm (alto × diámetro) aproximadamente Producto fabricado en cerámica con un acabado brillante  Producto apto para el microondas y el lavaplatos",
   image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465033269655-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es", 
   category: 'tazas'};

   


export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  
  useEffect (() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(producto);
      }, 1000);
    });
    
    getData.then(res => setData(res));
   }, [])

   
return (
  <>
  <h1 className='title'> PRODUCTOS</h1>
  <ItemDetail data={data} />
  </>
);
}

