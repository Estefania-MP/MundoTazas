import React from 'react';
import { useState, useEffect } from 'react';
import { ItemCount } from "../ItemCount/ItemCount.js";
import { ItemList } from "../ItemList/ItemList";
import { Routes, Route, useParams} from "react-router-dom";

//Constante
const productos = [
    {id: 1, title:"Taza Stich",category: 'tazas', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465033269655-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es",
    },
     
    {id: 2, title: "Taza Moana", category: 'tazas', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465032054825?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es",
},

{id: 3, title: "Adorno Stich ", category: 'accesorios', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465053520378?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es",
},

{id: 4, title: "Posa vasos coco ", category: 'accesorios', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465012944115-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es",
},
];

//Estado
export const ItemListContainer = ({}) => {
    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
           setTimeout(() => {
               resolve(productos);
           }, 1000);
        });
        if (id) {
            getData.then(res => setData(res.filter(producto => producto.category === id)));
         }else {
            getData.then(res => setData(res));
         }
         
        

    }, [id])


//Envio
  return (
      <>
      <h1 className='title'> PRODUCTOS</h1>
      <ItemList data={data}/>
      </>
  );
}

export default ItemListContainer;