
import "bootstrap/dist/css/bootstrap.min.css";

// Importar todos los componentes

//  Elementos básicos
import Imagen from "./components/Imagen";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";

//  Listas y tablas
import Lista from "./components/Lista";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import Input from "./components/Input";
import Boton from "./components/Boton";


function App() {
  return (
    <div className="p-4">

      <Titulo/>

      <Imagen/>

      <Parrafo/>

      <Enlace/>

      <br/>
      <Lista/>
      
      <Tabla/>

      <br/>
      <Formulario/>
      <br/>


    </div>
  );
}

export default App;
