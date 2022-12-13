import React, { useState } from 'react'

const ItemCount = (stock) => {

    const [count, setCount] = useState(0);
    const addCount = () => {
            if(count < stock.stock){
                setCount(count + 1);
            }
    };

    const subsCount = () => {
        if(count !== 0){
            setCount(count - 1);
        }
    }

    return (
    <>
        <div className="flex flex-col gap-3">
            <div className="flex">
                <button onClick={addCount} className="btn btn-xs h-7 mx-3">+</button>
                <div className="itemCounter h-7">{count}</div>
                <button onClick={subsCount} className="btn btn-xs h-7 mx-3">-</button>
            </div>
            <button className="btn">Agregar al carrito</button>
        </div>
    </>
    )
}

export default ItemCount