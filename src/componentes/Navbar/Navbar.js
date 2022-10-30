import React from 'react';
import logotaza from '../../assets/logotaza.png';
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";



export const Navbar = () => {



    return (
        <header>
    <div className='desplegable' >
    <div className='Hamburger' ><box-icon name='menu-alt-right' flip='horizontal' color='#ffffff' ></box-icon></div>
            <div className='links'>
            <ul>
          <li >
            <NavLink className="link" to="/">
              Inicio 
            </NavLink>
          </li>
          <li className="item">
            <NavLink className="link" to="/categoria/tazas">
              Tazas
            </NavLink>
          </li>
          <li className="item">
            <NavLink className="link" to="/categoria/accesorios">
              Accesorios
            </NavLink>
          </li>
        </ul>
            </div>
            </div>
      
            <NavLink to='/*' >
                <div className='logo'>
                    <img src={logotaza} alt='logo' width='100'></img>
                </div>
            </NavLink>
            <ul className='nav-links'>
                <li>
                    <NavLink to='/*'>INICIO</NavLink>
                </li>
                <li>
                    <NavLink to='/categoria/tazas'>TAZAS</NavLink>
                </li>
                <li>
                    <NavLink to='/categoria/accesorios'>ACCESORIOS</NavLink>
                </li>
            </ul>
            <div className='cart'>
                <NavLink to='/cart'>
                <CartWidget />
                </NavLink>
            </div>
        </header>

    )
}