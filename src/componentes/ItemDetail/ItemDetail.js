import React from 'react';
import Productos from "../Productos/Productos.json";


export const ItemDetail = () => {

return (
  <>
  {
    Productos.map(producto => {
      return (
        <div className='productos' key={producto.id}>
          <div className='producto'>
            <div className='producto__img'>
            <img src={producto.image} alt='' />
            </div>
            <div className='producto__footer'>
             <h1>{producto.title}</h1>
         </div>
         <div className='producto__footer'>
         <p>{producto.Description}</p>
         </div>
          </div>
        </div>
      )
    })
  }
  </>
);
}

export default ItemDetail;