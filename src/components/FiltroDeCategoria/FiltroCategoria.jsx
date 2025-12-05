
import React from "react";
import './FiltroDeCategoria.css'


function FiltroCategorias({ categoriaSeleccionada, setCategoriaSeleccionada }) {
    const categorias = ["todos", "cocina", "lavado", "climatizacion", "entretenimiento", "limpieza"];

    return (
        <div className="filtro-categorias">
            <label className="filtro">Filtrar por categoría: </label>
            <select className="seleccion-categoria"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
                {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FiltroCategorias