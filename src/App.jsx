import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // se genera logica -- 

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
