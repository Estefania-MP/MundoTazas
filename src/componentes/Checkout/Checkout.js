import React from "react";
import { Routes, Route, Link, } from "react-router-dom";
import { Navbar } from "reactstrap";
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "../CartItem/ItemCart";



 export const Checkout = () => {
    const {cart, totalPrice} = useCartContext();

    
return (
          <>
          <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>,
              <h1 className='title'> Registro de Orden</h1>
              <div className="form-contenedor">
                <form >
                    <div className="form">
                    <label>Nombre y Apellido  </label>
                    <input className="input" type="text"  name="nombre"  placeholder="Ingresa tu nombre y apellido" ></input>
                    </div>
                    <div className="form">
                    <label>Correo electronico  </label>
                    <input className="input" type="email"  name="email" placeholder="Ingresa tu correo electronico" inputLabel="inputEmail" ></input>
                    </div>
                    <div className="form">
                    <label>Celular de contacto</label>
                    <input className="input" type="number"  name="telefono" placeholder="Ingresa tu numeor de celular" ></input>
                    </div>
                    <div>
                    <h1 className='title'> detalle de compra</h1>
                    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p className='totalCart' >
        Total: ${totalPrice()}
      </p>
                    </div>
                </form>
              </div>
              <div>
              <Link to='/fin'  className='btnCart' type="submit" > Finalizar </Link>
              </div>
          </>
      
      );
  }
  