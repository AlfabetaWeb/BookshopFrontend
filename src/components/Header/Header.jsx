import React from "react"
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = props => {

    return (
        <header className="Header">
           <NavLink activeClassName="is-active" to="/">home</NavLink>
           <NavLink to="bookClub">Listado de Clubs</NavLink>

           <p>Bookshop</p>
        </header>
    )
}

export default Header