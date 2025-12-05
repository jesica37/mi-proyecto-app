
import './ItemCount.css'
import { useState, useContext} from 'react'
import { ThemeContext } from "../../context/ThemeContent"
import '../../assets/pages/Productos/Productos.css'


function ItemCount({ count, restar, sumar }) {
const {dark} = useContext(ThemeContext)
    
    return (

        <div className='contador'>
            <button onClick={restar} className='btn-contador'>-</button>
            <span className={`n-contador ${dark ? "dark" : "light"}`}>{count}</span>
            <button onClick={sumar} className='btn-contador'>+</button>
        </div>
    )
}
export default ItemCount