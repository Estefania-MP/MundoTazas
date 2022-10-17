import React from 'react';
import logotaza from '../../assets/logotaza.png';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <header>
            <div clasName= 'menu'>
            <box-icon name='menu-alt-right' flip='horizontal' color='#ffffff' ></box-icon>
            </div>
            <NavLink to='/*' >
                <div className='logo'>
                    <img src={logotaza} alt='logo' width='100'></img>
                </div>
            </NavLink>
            <ul>
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