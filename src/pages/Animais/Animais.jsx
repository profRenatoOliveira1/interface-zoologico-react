import Navegacao from '../../components/Navegacao/Navegacao';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import './Animais.css'
import { useEffect, useState } from "react";

function Animais() {

    // useState é um Hook responsável por manipular variáveis no React
    // Criando um array que vai receber do back-end as informações sobre os animais (nome, idade, genero, etc)
    const [animais, setAnimais] = useState([]);

    // useEffect é um Hook responsável por fazer uma conexão de rede com algum recurso (banco de dados, API, etc)
    useEffect(() => {
        // Cria uma arrow funcition que vai fazer a consulta dos dados na API
        const fetchData = async () => {
            try {
                // Faz a consulta (fetch) na API e retorna a resposta para a variável response
                const response = await fetch('http://localhost:3000/list/aves');
                // Verifica se o status da responsa deu alguma problema
                if (!response.ok) {
                    // Se deu problema, irá lançar um erro
                    throw new Error('Erro ao buscar servidor');
                }
                // Se a consulta foi feita com sucesso, vai pegar as informações, transformar em um JSON 
                // e armazenas na variável listaAnimais
                const listaAnimais = await response.json();
                // Usa o método setAnimais para atribuir o valor da variável listaAnimais para a variável animal
                setAnimais(listaAnimais);
            } catch (error) {
                // Caso aconteceça algum erro durante o processo, é lançada uma excesão
                console.error('Erro: ', error);
            }
        }

        // Chama a função para recuperar os dados dos animais do back-end
        fetchData();
    }, []);

    return(
        <>
            <Navegacao />
            <CardAnimal />
        </>
    );
}

export default Animais