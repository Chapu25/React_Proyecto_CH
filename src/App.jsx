
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/layout/navbar/Navbar"
import { CartContainer } from "./components/pages/cart/CartContainer"
import { ItemDetailContainer } from "./components/pages/ItemDetail/ItemDetailContainer"
import { Checkout } from "./components/pages/checkout/Checkout"
import { CartContextProvider } from "./context/CartContext"

function App() {
  
  return (

      <BrowserRouter>

      <CartContextProvider>
        <Navbar/>

          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/category/:name" element={ <ItemListContainer/> } />
            <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> } />

            <Route path="/cart" element={ <CartContainer/> } />
            <Route path="/checkout" element={ <Checkout/> } />

            


            <Route path="*" element={ <h2>404 NOT FOUND</h2> } />
          </Routes>
      </CartContextProvider>
      
      </BrowserRouter>
    
  )
}

export default App
