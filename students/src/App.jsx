import Alunos from "./components/Alunos/Alunos.jsx";
import Card from "./components/Card/Card.jsx";
import Button from "./components/Lista/Lista.jsx";

import { ListaMap, ListaFroEach, ListaMap0b } from "./components/Lista/Lista.jsx";

function App() {

  const objeto = {

  };

  const styles = {

  };

  return (
    <>
      <Alunos nome={'ivo'} idade={40} ativo={true} />
      <Alunos nome={'alex'} idade={32} />
      <Alunos nome={'nathy'} idade={17} ativo={false} />
    </>
  );
}

export default App