import './Animais.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import { useEffect, useState } from "react";
import birdsJson from '../../assets/json/birds.json';
import AnimalRequests from '../../fetch/AnimalRequests';

function Animais() {

    // useState é um Hook responsável por manipular variáveis no React
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

        // Chama a função para recuperar os dados dos animais do back-end
        fetchData();
    }, []);

    return(
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {/* Verifica se a variável animais não está vazia
                * Caso ela não esteja, será criado um componente CardAnimal passando as informações do animal como parâmetro (props)
                */}
                {animais.length > 0 ? (
                    //animais.map -> mapeia a lista de animais e para cada um que estiver na lista, dá o apelido de animal
                    animais.map((animal, i) => (
                        // Renderiza o componente CardAnimal com as informações do animal
                        // key -> todo componente react que irá renderizar várias vezes na mesma página precisa de um valor que identifique ele unicamente, para isso, utilizamos o índice do objeto
                        // animal -> informações do animal que serão passadas para o componente renderizar
                        // img -> endereço da imagem que será exibida dentro do card
                        <CardAnimal key={animal.idanimal} animal={animal} img={birdsJson[i % birdsJson.length].src} />
                    ))
                ) : (
                    // Caso haja algum erro de comunicação com o servidor, é exibida a mensagem abaixo na página
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default Animais