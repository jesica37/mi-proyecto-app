
/*import React from "react";

function FiltroCategoria({ categoriaSeleccionada, setCategoriaSeleccionada }) {
    const categorias = ["todos", "cocina", "lavado", "climatizacion", "entretenimiento", "limpieza"];

    return (
        <div> <div className="filtro-categoria">
            <label>Filtrar por categoría: </label>
            <select
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
                {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                ))}
            </select>
        </div>
            <div className="container">
                <h1>Catálogo de Productos</h1>

                <FiltroCategoria
                    categoriaSeleccionada={categoriaSeleccionada}
                    setCategoriaSeleccionada={setCategoriaSeleccionada} />

                <div className="productos-grid">
                    {productosFiltrados.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </div>)
}

export default FiltroCategoria;*/



/*import { useEffect, useState } from 'react'

function SelectorDeCategoria({ categoriaElegida }) {
     const [Productos,setProductos] = useState([])

     useEffect(() => {
            const filtrados = Productos.filter(producto => producto.categoria === categoriaElegida)
            setProductos(filtrados)
         }, [categoriaElegida])

    return (

 <div >
           {
            Productos.map((producto) =>{
                return <ItemDetail key={producto.categoria} producto={producto}/>
             })
            }
        </div>

    )
}
export default SelectorDeCategoria*/