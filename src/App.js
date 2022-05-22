import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="NUESTRO CATALOGO"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="NUESTRO CATALOGO"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
