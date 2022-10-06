import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Inicio } from "./componentes/Inicio/Inicio";
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import 'boxicons';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<Inicio/>} />
        <Route path='categoria/:id' element={<ItemListContainer/>} />
        <Route path='/detalles' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
