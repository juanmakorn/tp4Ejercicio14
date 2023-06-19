import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulos from "./components/Titulos";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import RecipePage from "./components/RecipePage";
import PaginaAdministrador from "./components/views/PaginaAdministrador";

function App() {
  // se genera logica --  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}></Route>
        <Route exact path="/administrador" element={<PaginaAdministrador></PaginaAdministrador>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
