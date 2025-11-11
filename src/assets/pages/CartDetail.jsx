import ItemCount from '../../components/ItemCount/ItemCount'
import { useParams } from 'react-router'

function CartDetail({productoId}) {

    return (
        <div>
            <ItemCount stock={10} />
        </div>
    )
}
export default CartDetail