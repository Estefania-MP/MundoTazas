import React, {useState, useEffect} from 'react';


export const ItemCount = ({initial, stock,onAdd}) => {
const [count, setCount] = useState(parseInt(initial));
const decrease = () => {
    setCount(count - 1);
}

const increase = () => {
    setCount(count + 1);
}

useEffect(() => {
  setCount(parseInt(initial));

}, [initial])


    return (
        <div className='counter'>
            
            <button className='number1' disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className='number2' disabled={count >= stock} onClick={increase}>+</button>
            <div >
                <button  className='btnn' disabled={stock <= 0} onClick={() => onAdd(count)}>añadir al carrito</button>
            </div>
            
        </div>
    )
}

