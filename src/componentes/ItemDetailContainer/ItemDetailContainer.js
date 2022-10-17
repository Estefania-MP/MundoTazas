import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  ItemDetail  from "../ItemDetail/ItemDetail";
import  Productos  from "../Productos/Productos.json";
import { useEffect } from "react";

//Constante
const productos = [
  {id: 1, title:"Taza Stich",category: 'tazas', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465033269655-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es", description: "Deja que la adorable criaturita alienígena dé un toque de personalidad a tus meriendas con esta taza de Stitch. El adorable diseño presenta una ilustración del personaje de tipo boceto. Capacidad: 475 ml aprox 13 × 9 cm (alto × diámetro) aproximadamente Producto fabricado en cerámica con un acabado brillante  Producto apto para el microondas y el lavaplatos", price: 3500,
  },
   
  {id: 2, title: "Taza Moana", category: 'tazas', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465032054825?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es", description: "La original taza, con ilustración de tipo boceto del personaje y un asa y una base doradas, se convertirá en tu favorita de todos los días. Capacidad: 355 ml aprox. 11 × 8,5 cm (alto × diámetro) aprox. Producto fabricado en cerámica con un acabado brillante",
  price: 3600,
},

{id: 3, title: "Adorno Stich ", category: 'accesorios', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465053520378?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es", description: "El feliz alienígena, que sale sonriendo de la piña con la parte superior de sombrero pidiendo un abrazo. Incorpóralo a tu ''ohana'' hoy mismo. Figurita: 14,5 cm (alto) aprox. Paquete: 20 × 11,5 × 13 cm (alto × ancho × diámetro) aprox. Producto fabricado con piedra artificial", price: 2800,

},

{id: 4, title: "Posa vasos coco ", category: 'accesorios', image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465012944115-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-es_es", description: "Incluye cuatro posavasos, cada uno con un diseño diferente inspirado en la película, que llevarán la magia de Disney a tu mesa.Posavasos: 13 × 13 × 3 cm (alto × ancho × profundidad) aprox. Posavasos: fabricados en cerámica Productos fabricados en madera", price: 2000,
},
];



export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const {detalleId} = useParams();

  useEffect(() => {
      const getData = new Promise(resolve => {
         setTimeout(() => {
             resolve(productos);
         }, 1000);
      });
          getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));
       
  }, [])


return (
  <>
  <h1 className='title'> DETALLES DEL PRODUCTO</h1>
  <ItemDetail data={data}/>
  </>
);
}

