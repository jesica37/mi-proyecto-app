
import './ItemListContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'

function ItemListContainer() {

    const [productos,setProductos] = useState([])
    

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/jsons/Productos.json")
                const data = await response.json()
                setProductos(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
/*
    useEffect(() => {
       const filtrados = Productos.filter(producto => producto.categoria === categoriaElegida)
       setProductos(filtrados)
    }, [categoriaElegida])*/


    return (
    
        <div className='container'>
           {
            productos.map((producto) =>{
                return <ItemDetail key={producto.id} producto={producto}/>
             })
            }
        </div>
    )
}
export default ItemListContainer