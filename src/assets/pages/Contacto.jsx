
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContent"
import '../pages/Productos/Productos.css'

function Contacto() {
    const {dark} = useContext(ThemeContext)
    return (
        <div className={dark ? "dark" : "light"}>
            <h2>Contacto</h2></div>
    );
}

export default Contacto;