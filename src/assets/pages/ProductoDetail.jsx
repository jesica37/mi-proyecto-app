import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { app } from "../../FirebaseCon";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import { ShoppingBasket } from "lucide-react";
import { CartContext } from "../../context/CartContext"
import { ThemeContext } from "../../context/ThemeContent"
import '../pages/Productos/Productos.css'
import Loading from "../../components/Loading/Loading";
import { UserContext } from "../../context/userContext";

function ProductoDetail() {

  const { productoId } = useParams();

  const navigate = useNavigate();

  const { dark } = useContext(ThemeContext)

  const { addCartProducto } = useContext(CartContext);

  const [isCargandoProducto, setCargandoProducto] = useState(true)

  const [producto, setProducto] = useState({});

  const [count, setCount] = useState(1);

  const { user } = useContext(UserContext)

  useEffect(() => {
    console.log(user)
    if (!user.token) {
      navigate("/login")
    }
  })
  const veraddCartProducto = () => {
    const newCartProducto = {
      id: producto.id,
      quantity: count,
    };

    addCartProducto(newCartProducto);
  };

  useEffect(() => {
    (async () => {
      try {
        const db = getFirestore(app);
        const productoRef = doc(db, "Productos", productoId);
        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          const productoDb = {
            id: productoRef.id,
            ...productoSnap.data(),
          };
          setProducto(productoDb);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productoId]);

  useEffect(() => {
    if (producto.nombre !== 0) {
      setTimeout(() => {
        setCargandoProducto(false)
      }, 400)
    }
  }, [producto])

  if (isCargandoProducto) return <Loading loading={isCargandoProducto} />

  return (
    <div className={dark ? "dark" : "light"}>
      <div className={`card-detalle ${dark ? "dark" : "light"}`}>
        <h3>{producto.nombre}</h3>
        <h5>{producto.detalles}</h5>
        <h5>Marca: {producto.marca}</h5>
        <h5>${producto.precio}</h5>
        <h5>Stock: {producto.stock}</h5>
      </div>

      <div className="btn-primary">
        <ButtonPrimary onClick={veraddCartProducto}>
          <ShoppingBasket />
          añadir
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ProductoDetail;


