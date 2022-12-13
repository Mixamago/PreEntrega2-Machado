import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from './catalogue'
import ItemCount from './ItemCount'

const ItemDetail = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const searchItem = () => {
            return new Promise((resolve, reject) => {
// eslint-disable-next-line                
                const target = productos.find(i => i.id == id)
                setTimeout(() => {
                    resolve(target)
                }, 2000)
            })
        }
        searchItem()
            .then(response => setItem(response))
    }, [id])
    
    return (
        <div className="card card-side bg-base-100 shadow-xl my-20 border-2 border-white">
            <figure><img src={item.pictureUrl} alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>Stock: {item.stock}</p>
                <div className="card-actions justify-center">
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail