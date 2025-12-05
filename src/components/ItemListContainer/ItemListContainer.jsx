
import './ItemListContainer.css'
import ItemDetail from '../ItemDetail/itemDetail'
import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { app } from '../../FirebaseCon'
import Loading from '../Loading/Loading'

function ItemListContainer({ categoriaSeleccionada }) {

    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [isCargandoProductos, setCargandoProductos] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const db = getFirestore(app)
                const productosCollection = collection(db, 'Productos')

                const productosSnapShot = await getDocs(productosCollection)

                const productosDb = productosSnapShot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()


                }));
                console.log(productosDb);
                setProductos(productosDb)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    useEffect(() => {
        if (!categoriaSeleccionada  || categoriaSeleccionada === "todos") {
            setProductosFiltrados(productos)
            return
        }

        const filtrados = productos.filter(p => p.categoria === categoriaSeleccionada)
        setProductosFiltrados(filtrados)

    }, [categoriaSeleccionada, productos])

    useEffect(() => {
        if (productos.length !== 0) {
            setTimeout(() => {
                setCargandoProductos(false)
            }, 400)
        }
    }, [productos])

    if (isCargandoProductos) return <Loading loading={isCargandoProductos} />

    return (
        <div className='container'>
            {
                productosFiltrados.map((producto) => (
                    <ItemDetail key={producto.id} producto={producto} />
                ))
            }
        </div>
    )
}

export default ItemListContainer





