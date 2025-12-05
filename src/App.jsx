/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Productos from './assets/pages/Productos/Productos'
import ProductoDetail from './assets/pages/ProductoDetail'
import Cart from './assets/pages/Cart'
import Contacto from './assets/pages/Contacto';
import NotFound from './assets/pages/NotFound';
import ThemeProvider from './context/ThemeContent';
import CartProvider from './context/CartContext';
import Navbar from './components/NavBar/NavBar'
import Login from './assets/pages/Login';
import Registro from './assets/pages/Registro';

function App() {
  /*const [count, setCount] = useState(0)*/
  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Productos />} />
            <Route path="/Producto-Detail/:productoId" element={<ProductoDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes> 
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
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