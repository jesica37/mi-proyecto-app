/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
/*import NavBar from './components/NavBar/NavBar'*/
import { BrowserRouter, Routes, Route } from "react-router";
import Productos from './assets/pages/Productos'
import ProductoDetail from './assets/pages/ProductoDetail'
import CartDetail from './assets/pages/CartDetail'
import Contacto from './assets/pages/Contacto';
import NotFound from './assets/pages/NotFound';

function App() {
  /*const [count, setCount] = useState(0)*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>} />
         <Route path="/" element={<Productos/>} />
          <Route path="/Producto-Detail/:productoId" element={<ProductoDetail/>} />
          <Route path="/Cart-Detail/:productoId" element={<CartDetail/>} />
          <Route path="/Contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>

  )
}
export default App

/*
<NavBar />
        <Container saludo="Bienvenido, en el siguiente catalogo podras ver nuestros productos" />


/* return (
   <>
     <div>
       <a href="https://vite.dev" target="_blank">
         <img src={viteLogo} className="logo" alt="Vite logo" />
       </a>
       <a href="https://react.dev" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
       </a>
     </div>
     <h1>Vite + React</h1>
     <div className="card">
       <button onClick={() => setCount((count) => count + 1)}>
         count is {count}
       </button>
       <p>
         Edit <code>src/App.jsx</code> and save to test HMR
       </p>
     </div>
     <p className="read-the-docs">
       Click on the Vite and React logos to learn more
     </p>
   </>
 )*/



/* <Route path="/" element={<NavBar />} />*/