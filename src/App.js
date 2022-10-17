import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Inicio } from "./componentes/Inicio/Inicio";
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./componentes/Cart/Cart";
import { CartContextProvider } from "./Context/CartContext";
import 'boxicons';



function App() {
  return ( 
    <>
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<Inicio/>} />
        <Route path='categoria/:id' element={<ItemListContainer/>} />
        <Route path='/detalles' element={<ItemDetailContainer />} />
        <Route path='/detalles/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartContextProvider>
      </BrowserRouter>
     
    </>
  );
}

export default App;
