
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/layout/navbar/Navbar"
import { CartContainer } from "./components/pages/cart/CartContainer"
import { ItemDetailContainer } from "./components/pages/ItemDetail/ItemDetailContainer"

function App() {
  
  return (

      <BrowserRouter>

      <Navbar/>

        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:name" element={ <ItemListContainer/> } />


          <Route path="/cart" element={ <CartContainer/> } />
          
          <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> } />


          <Route path="*" element={ <h2>404 NOT FOUND</h2> } />
        </Routes>

      </BrowserRouter>
    
  )
}

export default App
