import React, {useState} from 'react';
import { Routes, Route, } from "react-router-dom";

// Este item aun no esta añadido

export const ItemCount = (stock) => {
const [count, setCount] = useState(1);
const decrease = () => {
    setCount(count - 1);
}

const increase = () => {
    setCount(count + 1);
}

    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
        </div>
    )
}