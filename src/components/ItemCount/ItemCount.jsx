import useCount from '../../hooks/useCount'
import './ItemCount.css'
import {useState } from 'react'

function ItemCount({stock}) {
   
    const {count,restar,sumar}= useCount({inicial:1,stock})
    return (
       
        <div className='contador'>
            <button onClick={restar} className='btn-contador'>-</button>
            <span className='n-contador'>{count}</span>
            <button onClick={sumar} className='btn-contador'>+</button>
        </div>
    )
}
export default ItemCount