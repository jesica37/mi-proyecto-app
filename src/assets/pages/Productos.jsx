/*import Card from "./Card"*/
import { useState } from 'react'
import NavBar from "../../components/NavBar/NavBar"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import FiltroCategorias from "../../components/FiltroDeCategoria/FiltroCategoria"


function Productos() {

    const [categoria, setCategoria] = useState({})

    return (
        <div>
            <NavBar />
            <FiltroCategorias categoriaSeleccionada={categoria} setCategoriaSeleccionada={setCategoria} />
            <ItemListContainer categoriaSeleccionada={categoria} />
        </div>
    )
}
export default Productos