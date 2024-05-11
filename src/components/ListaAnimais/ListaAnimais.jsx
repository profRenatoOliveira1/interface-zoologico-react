import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AnimalRequests from '../../fetch/AnimalRequests';
import { FaTrash } from "react-icons/fa";

function ListaAnimais() {

    const [animais, setAnimais] = useState([]);

    // useEffect é um Hook responsável por fazer uma conexão de rede com algum recurso (banco de dados, API, etc)
    useEffect(() => {
        // Cria uma arrow funcition que vai fazer a consulta dos dados na API
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }

        // Chama a função para recuperar os dados dos animais do back-end
        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com id ${id}?`);
        if(confirma) {
            if(await AnimalRequests.deletarAnimal(id)) {
                window.alert('Animal deletado com sucesso');
                window.location.reload();
            } else {
                window.alert('Erro ao deletar o animal');
            }
        }
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Envergadura</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {animais ? (
                        animais.map((animal) => (
                            <tr key={animal.idanimal}>
                                <td>{animal.idanimal}</td>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergadura}</td>
                                <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrash /></td>
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