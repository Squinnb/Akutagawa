import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Products from "./components/productComponents/Products"
import NavBar from "./components/Navbar"
import Cart from "./components/Cart"
import { UserProvider } from './contexts/UserContext';


function App() {

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
        </main>
      </UserProvider>
      
      
    </div>
  )
}

export default App
