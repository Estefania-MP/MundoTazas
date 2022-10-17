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
  

return <CartContext.Provider value={{
    isInCart,
    addProduct,
    clearCart,
    removeProduct
}}>
    {children}
</CartContext.Provider>
}

//const addProduct = (id, item, newQuantity) => {
//    const newCart = cart.filter(prod => prod.id !== item.id);
 //   newCart.push({...item, quantity: newQuantity});
 //   setCart(newCart)
 // }