import { NavLink, useNavigate } from 'react-router'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import ButtonTheme from '../ButtonTheme/ButtonTheme'
import { getAuth, signOut } from "firebase/auth";
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';



function NavBar() {

    const auth = getAuth();
    const navigate = useNavigate()
    const {cerrarSesion} = useContext(UserContext)

    const salir = () => {
        signOut(auth).then(() => {
            cerrarSesion()
            navigate('/login')
        }).catch((error) => {

        });
    }
    return (
        <nav className='nav'>
            <ul className='barra'>
                <li ><NavLink className='menu' to="/">Inicio</NavLink></li>

            </ul>

            <ul className='barra'>
                <li ><NavLink className='menu' to="/contacto">Contacto</NavLink></li>

            </ul>
            <div>
                <img className='mi-logo' src="logo.png" clas="logo"></img>
            </div>
            <CartWidget />
            <ButtonTheme />
            <button onClick={salir} className='btn-salir'>Salir</button>
        </nav>

    )
}
export default NavBar