import styles from './ListaAnimais.module.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AnimalRequests from '../../fetch/AnimalRequests';
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function ListaAnimais() {

    // State para armazenar as informações dos animais
    const [animais, setAnimais] = useState([]);

    // useEffect é um Hook responsável por fazer uma conexão de rede com algum recurso (banco de dados, API, etc)
    // !!! Toda informação obtida através de um meio externo ao código (arquivos, bancos de dados, api, etc)
    // obrigatoriamente tem que ser feitos dentro do Hook useEffect !!!
    useEffect(() => {
        // Cria uma arrow funcition que vai fazer a consulta dos dados na API
        const fetchData = async () => {
            // Faz a chamada da função listarAnimais
            // o valor retornado é salvo na variável animais através do setAnimais
            setAnimais(await AnimalRequests.listarAnimais());
        }

        // Executa a função no momento que a página é carregada (renderizada)
        fetchData();
    }, []);

    /**
     * Função que lida com o evento para deletar um animal
     * 
     * @param {*} id id do animal a ser removido
     */
    const deletarAnimal = async (id) => {
        // Exibe uma janela de opções e pergunta para o usuário se ele realmente quer deletar o animal
        const confirma = window.confirm(`Deseja deletar o animal com id ${id}?`);

        if (confirma) {
            // Caso o usuário digite sim, chama a função para deletar o animal
            if (await AnimalRequests.deletarAnimal(id)) {
                // Se a função foi executada com sucesso, exibe um alerta de sucesso para o usuário
                window.alert('Animal deletado com sucesso');
                // Atualiza a página para não exibir o animal removido
                window.location.reload();
            } else {
                // Se a função não foi executada, exibe um alerta de erro para o usuário
                window.alert('Erro ao deletar o animal');
            }
        }
    }

    return (
        <>
            {/* Criando uma tabela para exibir os dados dos animais na página web
            * essa exibição poderia ser feita com cards, por exemplo, mas para facilitar, utilizaremos uma tabela */}
            <Table striped bordered hover>
                {/* thead define o cabeçalho da tabela */}
                <thead>
                    {/* tr define uma linha para a tabela */}
                    <tr>
                        {/* th define um campo de cabeçalho para a tabela
                        * A tabela terá 6 cabeçalhos
                        * 1. ID
                        * 2. Nome
                        * 3. Idade
                        * 4. Genero
                        * 5. Envergadura
                        * 6. Ação
                        */}
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Envergadura</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Verifica se a variável animais não está vazia
                    * Caso ela não esteja, será criada uma linha na tabela para cada animal recuperado do servidor
                    * animais.map -> mapeia a lista de animais e para cada um que estiver na lista, dá o apelido de animal
                    * tr -> cria uma linha na tabela para cada animal
                    * td -> renderiza as informações do animal para cada coluna da tabela, termos 6
                    * 1. ID do animal
                    * 2. nome do animal
                    * 3. idade do animal
                    * 4. genero do animal
                    * 5. envergadura do animal
                    * 6. ação para deletar o animal
                    * 
                    * onClick -> Dispara um evento quando aquele elemento for clicado, este evento irá chamar a função deletarAnimal passado como parâmetro o ID do animal a ser deletado
                    * 
                    * caso a variável esteja vazia, é exibida a mensagem "Carregando... Verifique se o servidor está funcionando"
                    * colSpan -> indica que aquelas linhas serão mescladas e ocuparão 6 linhas
                    */}
                    {animais ? (
                        animais.map((animal) => (
                            <tr key={animal.idanimal}>
                                <td>{animal.idanimal}</td>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergadura}</td>
                                <div className={styles.tbAcoes}>
                                    <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrash /></td>
                                    <td onClick={() => window.alert('nada aqui ainda')}><MdEdit /></td>
                                </div>
                            </tr>
                        )
                        )) : (
                        <tr>
                            <td colSpan="6">Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default ListaAnimais;