import { useState } from "react";
import ChooseProfile from "./Componentes/ChooseProfile";
import GetProfileChoose from "./Componentes/GetProfileChoose";
import Header from "./Componentes/Header"

const App = () => {
  const [pagina, setPagina] = useState("paginaInicial")
  //set pagina altera especificamente o valor do estado ao qual esta atrelado
  const mudança = () => {

    switch (pagina) {
      case "paginaInicial":
        return <GetProfileChoose />

      case "paginaLista":
        return <ChooseProfile />

      default:
        break;
    }
  }
  // atualizar valor de página
  const mudarPagina = (nomePagina) => {
    setPagina(nomePagina)
    // oi sou goku 
    //mudarPagina("paginaLista")

  }
  return (
    <div>
      <Header mudarPagina={mudarPagina} />
      {mudança()}
    </div>
  )
}

export default App;
