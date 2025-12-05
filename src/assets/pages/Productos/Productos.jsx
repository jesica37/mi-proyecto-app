/*import Card from "./Card"*/
import './Productos.css'
import { useContext, useState } from 'react';
import ItemListContainer from '../../../../src/components/ItemListContainer/ItemListContainer'
import FiltroCategorias from '../../../../src/components/FiltroDeCategoria/FiltroCategoria'
import { ThemeContext } from "../../../../src/context/ThemeContent"


function Productos() {

    const [categoria, setCategoria] = useState("todos")
    const { dark } = useContext(ThemeContext)

    return (
        <div className={dark ? "dark" : "light"}>

            <FiltroCategorias categoriaSeleccionada={categoria} setCategoriaSeleccionada={setCategoria} />
            <ItemListContainer categoriaSeleccionada={categoria} />
        </div>
    )
}
export default Productos