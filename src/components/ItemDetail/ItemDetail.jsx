import { ShoppingBasket } from 'lucide-react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContent'
import { CartContext } from '../../context/CartContext'
import useCount from '../../hooks/useCount'
import Loading from '../Loading/Loading'



function ItemDetail({ producto }) {
    const navigate = useNavigate()
    const [isCargandoProducto, setCargandoProducto] = useState(true)
    const [productos, setProductos] = useState([])
    const { dark } = useContext(ThemeContext)
    const { addCartProducto } = useContext(CartContext)
    const { count, restar, sumar } = useCount({ inicial: 1, stock: producto.stock })

    const navigateProductoDetail = () => {
        navigate(`/producto-detail/${producto.id}`)
    }

    const veraddCartProducto = () => {
        const newCartProducto = {
            id: producto.id,
            quantity: count
        }
        addCartProducto(newCartProducto)
    }

    const navigateCartDetail = () => {
        navigate(`/Cart-Detail/${producto.id}`)
    }

    useEffect(() => {
        if (producto.nombre !== 0) {
            setTimeout(() => {
                setCargandoProducto(false)
            }, 400)
        }
    }, [producto])

    if (isCargandoProducto) return <Loading loading={isCargandoProducto} />

    return (

        <div className={`card ${dark ? "dark" : "light"}`}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <img className='img-producto' src={producto.imagen} />

            <ItemCount count={count} restar={restar} sumar={sumar} />
            <span> $ {producto.precio}</span>
            <div className='btn-primary'>
                <ButtonPrimary onClick={veraddCartProducto}>
                    <ShoppingBasket />
                    añadir
                </ButtonPrimary>
                <ButtonPrimary onClick={navigateProductoDetail} >
                    detalle
                </ButtonPrimary>

            </div>
        </div>
    )
}
export default ItemDetail