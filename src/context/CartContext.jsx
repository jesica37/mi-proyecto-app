import { createContext, useEffect, useMemo, useState } from "react";


export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [quantityTotal, setQuantityTotal] = useState(0);


    useEffect(() => {
        setQuantityTotal(
            cart.reduce((acc, producto) => acc + producto.quantity, 0)
        );
    }, [cart]);


    const addCartProducto = (newProducto) => {
        const productoExiste = cart.some(producto => producto.id === newProducto.id);

        if (productoExiste) {
            setCart(
                cart.map(producto =>
                    producto.id === newProducto.id
                        ? { ...producto, quantity: producto.quantity + newProducto.quantity }
                        : producto
                )
            );
            return;
        }


        setCart([...cart, newProducto]);
    };


    const eliminarCartProducto = (id) => {
        setCart(cart.filter(producto => producto.id !== id));
    };


    const vaciarCartProducto = () => {
        setCart([]);
    };


    const total = useMemo(() => {
        const quantityTotal = cart.reduce((acc, producto) => acc + producto.quantity, 0);
        const totalPrecio = cart.reduce((acc, producto) => acc + producto.quantity * producto.precio, 0);
        console.log(totalPrecio)
        return { quantityTotal, totalPrecio };
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, quantityTotal, addCartProducto, eliminarCartProducto, vaciarCartProducto, total }}
        >
            {children}
        </CartContext.Provider>
    );
}