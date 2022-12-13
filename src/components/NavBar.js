import React from 'react'
import { Link } from 'react-router-dom'
import CartLogo from './CartLogo'
import logo from '../img/otros/logo.webp'

const NavBar = () => {
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <Link to='/'><img src={logo} alt=''/></Link>
            </div>
            <div className="navbar-center flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/category/bombillas" className="btn btn-accent mx-4">Bombillas</Link></li>
                    <li><Link to="/category/mates" className="btn btn-accent mx-4">Mates</Link></li>
                    <li><Link to="/category/tapones" className="btn btn-accent mx-4">Tapones</Link></li>
                    <li><Link to="/category/termos" className="btn btn-accent mx-4">Termos</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <CartLogo/>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">0 artículos</span>
                                <span className="text-info">Subtotal: $0</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">Ver carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar