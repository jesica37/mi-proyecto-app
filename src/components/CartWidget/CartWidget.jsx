
import { Link } from 'react-router'
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



function CartWidget() {
 const {quantityTotal} = useContext(CartContext)
    return (
        <Link to="/cart " className='btn-cart'>
            <ShoppingCart className='cart' />
            <span className='cantidad' >{quantityTotal}</span>
        </Link>
    )
}
export default CartWidget