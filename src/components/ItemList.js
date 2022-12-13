import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productos } from './catalogue';

const ItemList = (param) => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const scanProducts = () => {
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    resolve(productos);
                }, 2000);
            });
        };
        if(param.param !== undefined){
            scanProducts()
                .then(response => {
                    setProducts(response.filter(item => item.category === param.param));
            });
        }
        else{
            scanProducts()
            .then(response => {
                setProducts(response);
            });
        }
    }, [param]);
    return (
        <div>
            <div className="flex flex-wrap">
                {products.map(p => <Item key={p.id} {...p}/>)}                                          
            </div>
        </div>
    )
}

export default ItemList