import React, { useState } from "react";
import { Routes, Route, Link, } from "react-router-dom";
import { Navbar } from "reactstrap";
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "../CartItem/ItemCart";
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { Firestore } from "firebase/firestore";





 export const Checkout = () => {
    const {cart, totalPrice} = useCartContext();



    //Confirmacion de email
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");

    const onEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const onEmailConfirmChange = (event) => {
      setEmailConfirm(event.target.value);
    };


  
    

    
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
                    <input className="input" type="email"  name="email" placeholder="Ingresa tu correo electronico" inputLabel="inputEmail" valueInput={email} onChange={onEmailChange}></input>
                    </div>
                    <div className="form">
                    <label>Correo electronico  </label>
                    <input className="input" placeholder="Repetir correo electronico" type="email"  name="email2" inputLabel="inputConfirmEmail" valueInput={emailConfirm} onChange={onEmailConfirmChange}></input>
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
  