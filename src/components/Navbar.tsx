import { NavLink } from "react-router-dom"
import { useContext } from "react"

export function Navbar() {

    return (
        <nav>
            <ul>              
               <li><NavLink to="/home" style={({ isActive }) => ({color: isActive ? 'red' : 'black',})}>Home</NavLink></li>          
                <li><NavLink to="/category" style={({ isActive }) => ({color: isActive ? 'red' : 'black',})}>Categories</NavLink></li>
                <li><NavLink to="/favorites" style={({ isActive }) => ({color: isActive ? 'red' : 'black',})}>Favorites</NavLink></li> 
            </ul>
        </nav>
    )
}