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
        console.log("componente carregado pela primeira vez");

    }, []);

    // caso 2: executa sempre que o contador mudar //
    useEffect(() => {
        console.log("tema alterado:", temaEscuro ? "Escuro" : "Claro");

    }, [temaEscuro]);

    // caso 3: executa sempre que o tema mudar //
    useEffect(() => {

    }, [temaEscuro]);


    // função para aumentar o contador //
    function aumentarContador() {
        setContador(contador + 1);

    }

    function diminuirContador() {
        setContador(contador - 1)

    }

    function alternarTema() {
        setTemaEscuro (!temaEscuro)

    }

    return (

        <main
            className={` ${styles.container
                } ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}
        >
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

            {/* caso 1: contador */}
            <section className={styles.card}>

                <h2>1. Contador (useState)</h2>
                <p className={styles.valor}>{contador}</p>
                <div className={styles.botoes}>
                    <button onClick={diminuirContador}>-</button>
                    <button onClick={aumentarContador}>+</button>
                </div>
                <p>
                    O useEffect observa a variável <strong>contador</strong> e 
                    executa sempre que ela muda.
                </p>
            </section>

            {/* caso 2: campo de texto */}
            <section className={styles.card}>

                <h2>2. Campo de texto (useState)</h2>
                <input 
                type="text" 
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={styles.input}
                />

                <p>
                    Olá, <strong>{nome || "Visitante"}</strong>
                </p>
            </section>

            {/* caso 3: alternância de tema */}
            <section className={styles.card}>

                <h2>3. Alternância de tema (useState)</h2>
                <button onClick={alternarTema} className={styles.botaoTema}>
                    Alternar para tema  {temaEscuro ? "Claro" : "Escuro"}
                </button>
                 <p>
                    O useEffect observa a variável <strong>temaEscuro</strong> e 
                    executa sempre que o tema é alterado.
                 </p>

            </section>

        </main>
    );
}

export default Tema;
