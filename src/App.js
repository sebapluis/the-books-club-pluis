import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";


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
      </Routes>
    </div>
  );
}

export default App;
