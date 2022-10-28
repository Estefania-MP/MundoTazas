import { createContext, useContext, useState } from "react";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
const [cart, setCart] = useState([])

//Para saber si el producto esta en el carrito
const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

// Añadir al carrito
const addProduct = ( item, quantity) => {
       if (isInCart (item.id)){
        setCart(cart.map(product => {
            return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
        }));
       } else {
          setCart([...cart, {...item, quantity}])  ;
    }

 }
  console.log('carrito: ', cart);

    //Limpiar carrito
  const clearCart = () => setCart([]);
  
  //Borrar producto del carrito
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
  
  //Precio total del carrito
const totalPrice = ()=> {
  return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
}

// Cantidad total de productos del carrito
const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);


return <CartContext.Provider value={{
    isInCart,
    addProduct,
    clearCart,
    removeProduct,
    totalPrice,
    totalProducts,
    cart
}}>
    {children}
</CartContext.Provider>
}

