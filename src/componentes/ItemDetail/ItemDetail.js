import React from 'react';


export const ItemDetail = ({data}) => {

return (
  <>
        <div className='productos' >
          <div className='producto'>
            <div className='producto__img'>
            <img src={data.image} alt='' />
            </div>
            <div className='producto__footer'>
             <h1>{data.title}</h1>
         </div>
         <div className='producto__footer'>
         <p>{data.description}</p>
         </div>
          </div>
        </div>
  </>
);
}

export default ItemDetail;