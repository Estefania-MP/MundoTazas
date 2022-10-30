import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const CartWidget = () => {
  const {totalProducts} = useCartContext();

    return (
        <div>
            <box-icon name='cart' animation='tada' color='#ffffff'></box-icon>
                <span className='total'  >{totalProducts() || ''}</span>
        </div>
    );
}

