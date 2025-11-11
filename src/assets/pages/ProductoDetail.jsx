import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ProductoDetail() {
    const { productoId } = useParams()

    const [producto, setProducto] = useState({})
    const [detalle, setDetalle] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/jsons/Productos.json")
                const productos = await response.json()
                const productoFind = productos.find(producto => producto.id == productoId)
                setProducto(productoFind)
                setDetalle(productoFind.detalles)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])

    return (

        <div className='card-detalle'>
            <h3>{producto.nombre}</h3>
            <h5>{producto.marca}</h5>
            <h5>{producto.modelo}</h5>
            <h5>{producto.precio}</h5>
            <h5>{detalle.capacidad}</h5>
            <h5>{detalle.eficiencia}</h5>
            <h5>{detalle.color}</h5>
            <h5>{detalle.consumo}</h5>
            <h5>{detalle.velocidad_centrifugado}</h5>
            <h5>{detalle.color}</h5>
            <h5>{detalle.potencia}</h5>
            <h5>{detalle.tipo}</h5>
            <h5>{detalle.modo}</h5>
            <h5>{detalle.control_remoto}</h5>
            <h5>{detalle.presion}</h5>
            <h5>{detalle.tamaño}</h5>
            <h5>{detalle.resolucion}</h5>
            <h5>{detalle.sistema_operativo}</h5>
            <h5>{detalle.conectividad}</h5>
            <h5>{detalle.capacidad_bowl}</h5>
            <h5>{detalle.material}</h5>
            <h5>{detalle.velocidades}</h5>
            <h5>{detalle.funciones}</h5>
            <h5>{detalle.filtro}</h5>
            <h5>{detalle.material_vaso}</h5>
        </div>


    )
}
export default ProductoDetail


