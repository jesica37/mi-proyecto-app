import { ShoppingBasket } from 'lucide-react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router'
import CartDetail from '../../assets/pages/CartDetail'

function ItemDetail({ producto }) {
    const navigate = useNavigate()

    const navigateProductoDetail = () => {
        navigate(`/producto-detail/${producto.id}`)
    }
    const navigateCartDetail = () => {
        navigate(`/Cart-Detail/${producto.id}`)
    }

    return (

        <div className='card'>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <img></img>
            <ItemCount stock={producto.stock} />
            <span> $ {producto.precio}</span>
            <div className='btn-primary'>
                <ButtonPrimary onClick={navigateCartDetail}>
                    <ShoppingBasket />
                    carrito
                </ButtonPrimary>
                <ButtonPrimary onClick={navigateProductoDetail} >
                    detalle
                </ButtonPrimary>

            </div>
        </div>
    )
}
export default ItemDetail