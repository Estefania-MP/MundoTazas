import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  ItemDetail  from "../ItemDetail/ItemDetail";
import  Productos  from "../Productos/Productos.json";
import { useEffect } from "react";




export const ItemDetailContainer = () => {

return (
  <>
  <h1 className='title'> DETALLES DEL PRODUCTO</h1>
  <ItemDetail/>
  </>
);
}

