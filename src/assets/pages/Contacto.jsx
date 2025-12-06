
import { CartContext } from "../../context/CartContext"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContent"
import '../pages/Productos/Productos.css'
import { useNavigate } from "react-router"
import { UserContext } from "../../context/userContext"

function Contacto() {
    const {dark} = useContext(ThemeContext)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        if(!user.token){
            navigate("/login")
        }
    })
    return (
        <div className={dark ? "dark" : "light"}>
            <h2>Contacto</h2></div>
    );
}

export default Contacto;