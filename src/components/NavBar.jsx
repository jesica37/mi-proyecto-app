import CartWidget from '../components/CartWidget'

function NavBar() {

    return (
        <div>
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
            </ul>
            <div>
                <img src='logo.png' clas="logo"></img>
            </div>
            <ul>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </div>

    )
}
export default NavBar