
import { useEffect } from "react";
import styles from "./Contador.module.css";

function Contador() {
  return (
    <div>
      
    </div>
  );
}

const [automatico, setAutomatico] = useState(false);

// efeito que monitora o estado "automatico"

useEffect(() =>{

  let relogio;

  if (automatico) {
    // se estiver ativo, cria um intervalo que aumenta o contador a cada 1 segundo (1000ms)
    relogio = setInterval(() =>{
      // importante: usamos a função de callback (c => c + 1) para pegar sempre o valor mais recente
      setContador((valorAtual) => valorAtual + 1);

      }, 1000);
    }

    //função de limpeza: desliga o relógio quando o automático é desativado ou o componente desmonta
    return () => clearInterval(relogio);
  }, [automatico]);


  const alternarAutomatico = () => {
    setAutomatico(!automatico);
  }

  const reiniciar = () => {
    setContador(0);
    setAutomatico(false);
  }

  const aumentar = () => {
    setContador(contador + 1)

  }




export default Contador;