
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react'


function CartWidget() {

    return (
        <button className='btn-cart'>
            <ShoppingCart className='cart' />
        </button>
    )
}
export default CartWidget