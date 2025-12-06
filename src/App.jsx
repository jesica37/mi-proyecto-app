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
import UserProvider from './context/userContext';

function App() {

  return (
    <UserProvider>
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
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
    </UserProvider>
  )
}
export default App
