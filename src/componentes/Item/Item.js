import React from "react";
import {Link} from "react-router-dom";

export const Item = ({info}) => {

return(
    <>
    <div className='productos'>
         <div className='producto'>
         <Link to='#' >
         <div className='producto__img'>
             <img src={info.image} alt='' />
         </div>
         <div className='producto__footer'>
             <h1>{info.title}</h1>
             <p className='price'>$123</p>
         </div>
         <div className='buttom'>
             <button className='btn'>
                 Añadir al carrito
             </button>
             <div className='vision'>
             <Link to='/detalles' className='btn'>Ver</Link>
             <box-icon name='low-vision' color='#ffffff' animation='flashing'></box-icon>
             </div>
         </div>
         </Link>
         </div>
         </div>

          </>
)
}

