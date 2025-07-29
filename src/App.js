
import "bootstrap/dist/css/bootstrap.min.css";

// Importar todos los componentes

//  Elementos básicos
import Imagen from "./components/Imagen";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";



function App() {
  return (
    <div className="p-4">

      <Titulo/>

      <Imagen/>

      <Parrafo/>

      <Enlace/>

    </div>
  );
}

export default App;
