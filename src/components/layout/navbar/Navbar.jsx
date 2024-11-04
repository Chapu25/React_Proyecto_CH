import React from 'react'
import "./navbar.css"
import { CardWidget } from '../../common/cartWidget/CardWidget';
import { Link } from 'react-router-dom';


export const Navbar = () => {
return (
    
    <>
    
    <div className="container_navbar">
        
        <Link to="/">
            <img src="/logo.png" alt="logo" />
        </Link>

        <ul>
            <Link to="/">Todos</Link>
            <Link to="/category/vodka">Vodka</Link>
            <Link to="/category/licor">Licor</Link>
            <Link to="/category/wishky">Wishky</Link>
            
        </ul>

        
        <CardWidget/>
    </div>
    

    </>
    )
};
