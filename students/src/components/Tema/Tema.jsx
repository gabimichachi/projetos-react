import { useState, useEffect } from "react";
import styles from "./Tema.module.css";

function Tema() {

    // casos de uso do useState //

    // caso 1: contador //
    const [contador, setContador] = useState(0);

    // caso 2: texto digitado pelo usuário //
    const [nome, setNome] = useState("");

    // caso 3: controle de tema //
    const [temaEscuro, setTemaEscuro] = useState(false);

    // casos de uso do useEffect //

    // caso 1: executa apenas uma vez, ao carregar o componente //
    useEffect(() => {

    }, []);

    // caso 2: executa sempre que o contador mudar //
    useEffect(() =>{

    }, [contador]);

    // caso 3: executa sempre que o tema mudar //
    useEffect(() =>{

    }, [temaEscuro]);


    // função para aumentar o contador //
    function aumentarContador() {

    }

    function diminuirContador(){

    }

    function alternarTema(){
        
    }

    return(
        <main>
        </main>
    );
}