import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


export const ItemDetail = ({data}) => {
const [goToCart, setGoToCart] = useState(false);
const {addProduct} = useCartContext();

const onAdd = (quantity) => {
  setGoToCart(true);
  addProduct(data, quantity);
}


return (
        <div className='productos' >
          <div className='producto'>
            <div className='producto__img'>
            <img src={data.image} alt='' />
            </div>
            <div className='producto__footer'>
             <h1>{data.title}</h1> <br></br>
             <p className='price'>${data.price}</p>
         </div>
         <div className='producto__footer'>
         <p>{data.description}</p>
         </div>
         <div>
          {
            goToCart ?
            <div className='counter' >¡Añadido!</div>
            :
             <ItemCount initial={0} stock={5} onAdd={onAdd}/>
          }
         </div>
         <Link className='btnlink' to='/cart'>
         FINALIZAR COMPRA
         </Link>
          </div>
        </div>
);
}

export default ItemDetail;