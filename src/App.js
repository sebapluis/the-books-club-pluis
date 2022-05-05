import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos"/>}/>
        <Route path="/detalle" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
