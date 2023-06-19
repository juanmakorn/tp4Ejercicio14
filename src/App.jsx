import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulos from "./components/Titulos";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";

function App() {
  // se genera logica --  const [count, setCount] = useState(0)

  return (
    <section>
      <Menu/>
      <Titulos/>
      <Footer/>
    </section>
  );
}
export default App;
