import React from 'react'   
import { NavLink } from 'react-router-dom'

const Item = ({id, title, price, pictureUrl, description}) => {
    return (
        <div className="card border-2 border-white w-52 bg-base-100 shadow-xl mx-5 mt-10">
            <figure className="border-b-2 border-b-white">
                <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-2 items-center text-center">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{description}</p>
                <p className="text-xl">${price}</p>
                <div className="card-actions">
                    <NavLink to={`item/${id}`} className="btn btn-accent">Más información</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item