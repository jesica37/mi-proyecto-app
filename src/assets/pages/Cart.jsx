
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary"
import { ShoppingBasket } from 'lucide-react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { app } from '../../FirebaseCon'
import { ThemeContext } from "../../context/ThemeContent"
import '../pages/Productos/Productos.css'


function Cart() {

    const { dark } = useContext(ThemeContext);
    const { cart, eliminarCartProducto, vaciarCartProducto, total } = useContext(CartContext);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const db = getFirestore(app);
                const productosCollection = collection(db, "Productos");
                const productosSnapShot = await getDocs(productosCollection);

                const productosDb = productosSnapShot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProductos(productosDb);

            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className={dark ? "dark" : "light"}>
            <h2>Carrito</h2>


            <h3 className='info-cart'>Total de productos: {total.quantityTotal}</h3>
            <h3 className='info-cart'>Total a pagar: {total.totalPrecio}</h3>


            <div className='btn-primary-cart'>
                <ButtonPrimary onClick={vaciarCartProducto}>
                    <ShoppingBasket />
                    Vaciar carrito
                </ButtonPrimary>
            </div>


            {cart.map(cartProducto => {
                const dataProducto = productos.find(
                    producto => producto.id === cartProducto.id
                );

                return (
                    <div key={cartProducto.id} className={`card ${dark ? "dark" : "light"}`}>
                        <h3>{dataProducto?.nombre}</h3>
                        <span>$ {dataProducto?.precio}</span>
                        <span>Cantidad: {cartProducto.quantity}</span>

                        <div className='btn-primary-cart'>
                            <ButtonPrimary onClick={() => eliminarCartProducto(cartProducto.id)}>
                                <ShoppingBasket />
                                Eliminar
                            </ButtonPrimary>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;