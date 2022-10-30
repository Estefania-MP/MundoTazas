import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const ItemCart = ({product}) => {
  const {removeProduct} = useCartContext();

    return (
        <>
      <div className='ItemCart'>
        <img src={product.image} alt={product.title} />
        <div>
          <p className='textCart' >Titulo: {product.title}</p>
          <p className='textCart' >Cantidad: {product.quantity}</p>
          <p className='textCart' >Precio por unidad: ${product.price}</p>
          <p className='textCart' >Subtotal: ${product.quantity * product.price}</p>
          <button className='btnCart' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
      </>
    )
}