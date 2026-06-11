import {useState} from "react"

function UseStateHook(){
    // iniciar o estado
    const [nome, setNome] = useState('Clique em mudar.');
    const [idade, setIdade]= useState(0);
    const [eFalso, setFalso] = useState(false);
    const [fruta, setFruta] = useState();

    // atualizar estado
    const atualizarNome = () => {

        setNome('alex');

    }

    const atualizarIdade = () => {

        setIdade(idade + 1)

    }

    const verificarEstado = () => {

    }



return (

    <div>
        <p>Nome: {nome}</p>
        <button onClick={atualizarNome}>Mudar</button>

        <p>Idade: {idade}</p>
        <button onClick={atualizarIdade}>Incrementar</button>

        <p>É falso: {eFalso ? 'SIM' : 'NÃO'}</p>
        <button onClick={verificarEstado}>Verificar</button>

        <p>Fruta Secreta: {fruta}</p>
        <button>onClick={mostrarFruta}</button>
    </div>
)

}
export default UseStateHook