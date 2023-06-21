import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import PaginaAdministrador from "./components/views/PaginaAdministrador";
import Error404 from "./components/views/Error404";

function App() {
  // se genera logica --  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}></Route>
        <Route exact path="/administrador" element={<PaginaAdministrador></PaginaAdministrador>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;