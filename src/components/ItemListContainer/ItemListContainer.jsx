
import './ItemListContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'

function ItemListContainer({ categoriaSeleccionada }) {

    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/jsons/Productos.json")
                const data = await response.json()
                setProductos(data)
                setProductosFiltrados(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        const filtrados = productos.filter(producto => producto.categoria === categoriaSeleccionada)
        setProductosFiltrados(filtrados)
    }, [categoriaSeleccionada])


    return (

        <div className='container'>
            {
                productosFiltrados.map((producto) => {
                    return <ItemDetail key={producto.id} producto={producto} />
                })
            }
        </div>
    )
}
export default ItemListContainer