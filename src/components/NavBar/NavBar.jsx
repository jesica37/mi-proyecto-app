import { NavLink } from 'react-router'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {

    return (
        <nav className='nav'>
            <ul className='barra'>
                <li className='menu' >Inicio</li>
                <li className='menu'>Categorias</li>
            </ul>
            <div>
                <img className='mi-logo'   src="logo.png" clas="logo"></img>
            </div>
            <ul className='barra'>
                <li className='menu'><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
            <CartWidget />
        </nav>

    )
}
export default NavBar