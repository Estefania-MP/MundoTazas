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
             <p className='price'>${info.price}</p>
         </div>
         <div className='buttom'>
             <div className='vision'>
             <Link to={`/detalles/${info.id}`} className='btn'>Ver</Link>
             </div>
         </div>
         </Link>
         </div>
         </div>

          </>
)
}

