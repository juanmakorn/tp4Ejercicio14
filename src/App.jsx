import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import CardReceta from "./components/views/Recetas/CardReceta";
import Menu from "./components/common/Menu";
function App() {
  // se genera logica -- 

  return (
    <>
    <Menu></Menu>
    <Titulo></Titulo>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
  
    <Footer></Footer>
    </>
  );
}

export default App;
