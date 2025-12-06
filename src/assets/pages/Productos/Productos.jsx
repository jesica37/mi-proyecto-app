/*import Card from "./Card"*/
import './Productos.css'
import { useContext, useEffect, useState } from 'react';
import ItemListContainer from '../../../../src/components/ItemListContainer/ItemListContainer'
import FiltroCategorias from '../../../../src/components/FiltroDeCategoria/FiltroCategoria'
import { ThemeContext } from "../../../../src/context/ThemeContent"
import { useNavigate } from 'react-router';
import { UserContext } from '../../../context/userContext';


function Productos() {

    const [categoria, setCategoria] = useState("todos")
    const { dark } = useContext(ThemeContext)
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

            <FiltroCategorias categoriaSeleccionada={categoria} setCategoriaSeleccionada={setCategoria} />
            <ItemListContainer categoriaSeleccionada={categoria} />
        </div>
    )
}
export default Productos