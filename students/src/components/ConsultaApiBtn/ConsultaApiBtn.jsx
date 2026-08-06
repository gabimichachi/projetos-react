import { useState } from "react";
import styles from "./ConsultaApiBtn.module.css";

function ConsultaApiBtn() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

    async function BuscarUsuarios() {
        setLoading(true);
        setErro("");

        try {
            const resposta = await fetch(
                "https://jsonplaceholder.typicode.com/users/401"
            );

            console.log(resposta);

            if (!resposta.ok) {
                // tratar erro interno do servidor (500)
                if (resposta.status === 500) {
                    throw new Error("Erro 500: o banco de dados ou servidor falhou.");
                }

                // tratar erro de autenticação (401)
                if (resposta.status === 401) {
                    throw new Error("Erro 401: usuário não autorizado.");
                }

                // tratar outros erros HTTP (404, etc.)
                throw new Error(
                    `Erro ${resposta.status}: URL não encontrada ou inválida.`
                );
            }

            const dados = await resposta.json();
            setUsuarios(dados);
            console.log(dados);

        } catch (error) {
            console.log(error.message);

            // tratar falha de conexão
            if (
                error.message.toLowerCase() === "failed to fetch" ||
                !navigator.onLine
            ) {
                setErro(
                    "Não foi possível conectar ao servidor. Verifique sua internet."
                );
            } else {
                setErro(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.titulo}>Consulta de API</h1>

            <section className={styles.card}>
                <button
                    className={styles.buscarButton}
                    onClick={BuscarUsuarios}
                    disabled={loading}
                >
                    {loading ? "Buscando..." : "Consultar"}
                </button>

                <h2>Usuários da JSON Placeholder</h2>

                {/* Exibe mensagem de erro */}
                {erro && <p className={styles.erro}>{erro}</p>}

                {/* Exibe a lista de usuários */}
                {!carregando && !erro && (
                    <ul className={styles.lista}>
                        {/* Para cada item da lista vai retornar uma li completa (h3 e p) */}
                        {usuarios.map((usuario) => (
                            <li key={usuario.id} className={styles.item}>
                                <h3>{usuario.name}</h3>
                                <p>
                                    <strong>E-mail:</strong> {usuario.email}
                                </p>
                                <p>
                                    <strong>Cidade:</strong> {usuario.address.city}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}

export default ConsultaApiBtn;