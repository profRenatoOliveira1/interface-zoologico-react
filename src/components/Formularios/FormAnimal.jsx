import AnimalRequests from '../../fetch/AnimalRequests';
import './FormAnimal.css';
import { useState, useEffect } from 'react';

function FormAnimal() {

    // State para armazenar as informações do formulário
    const [formData, setFormData] = useState({
        nome: '',
        genero: 'macho',
        idade: '',
        envergadura: '',
        idHabitat: '1'
    });

    // State para armazenar a lista de habitats
    const [habitats, setHabitats] = useState([]);

    // Função para lidar com a mudança nos campos de entrada
    // o parâmetro e, representa o objeto que gerou o evento que chamou a função
    const handleChange = (e) => {
        // Pega as informações do campo que disparou o evento e armazena o atributo name e value da tag em variáveis com o mesmo nome
        const { name, value } = e.target;
        // Atualiza o estado com as informações do campo
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    // o parâmetro e, representa o objeto que gerou o evento que chamou a função
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Tenta fazer o envio do formulário, caso o retorno seja verdadeiro (TRUE)
        // é exibida uma mensagem de sucesso
        if (AnimalRequests.cadastrarAnimal(formData)) {
            alert("Animal cadastrado com sucesso!");

        // Caso ocorra algum erro é exibida uma mensagem de falha
        } else {
            alert("Erro ao cadastrar animal");
        }
    };

    // Hook para buscar os habitats que estão salvas no servidor
    // !!! Toda informação obtida através de um meio externo ao código (arquivos, bancos de dados, api, etc)
    // obrigatoriamente tem que ser feitos dentro do Hook useEffect !!!
    useEffect(() => {
        // Função assíncrona para buscar as informações dos habitats no servidor
        const fetchHabitats = async () => {
            // Tenta fazer a busca
            try {
                // Realiza uma requisição GET para o servidor
                const response = await fetch("http://localhost:3000/habitats");

                // Verifica se a requisição foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados do servidor');
                }

                // Extrai os dados da resposta e os converte para JSON
                const jsonData = await response.json();

                // Retorna os dados recebidos do servidor
                setHabitats(jsonData);
            
            // Caso ocorra algum erro, é lançada uma exceção
            } catch (error) {
                console.error('Erro:', error);
                // Em vez de apenas logar o erro, você pode decidir como lidar com ele aqui
                throw error; // Lança o erro para que quem chame a função possa tratá-lo
            }
        };

        // Executa a função no momento que a página é carregada (renderizada)
        fetchHabitats();
    }, []);

    return (
        <>
            <h2>Cadastro de Ave</h2>
            {/** criação do formulário, ao ser enviado (clicado em cadastrar)
             *   é disparada a função handleSubmit
             */}
            <form onSubmit={handleSubmit}>
                <label>
                    {/** Entrada de texto para o nome do animal
                     * placeholder -> exibe no campo uma mensagem que é apaga quando o usuário digita algo, isso serve para ajudar o usuário a saber o que aquele campo representa
                     * type -> indica que o tipo de dado que o campo aceita é do tipo text (texto)
                     * name -> indica o nome do campo, é por esse atributo que conseguimos recuperar e alterar o valor nas variáveis
                     * value -> o valor que foi digitado pelo usuário, este valor é armazenado na variável do formData sempre que o usuário digita algo
                     * onChange -> Dispara um evento, que quando o campo é alterado (seja por digitar algo ou por apagar algo), chama a função handleChange
                     */}
                    <input
                        placeholder='Nome da ave'
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    {/** Entrada de texto para a idade
                     * placeholder -> exibe no campo uma mensagem que é apaga quando o usuário digita algo, isso serve para ajudar o usuário a saber o que aquele campo representa
                     * type -> indica que o tipo de dado que o campo aceita é do tipo number (números)
                     * name -> indica o nome do campo, é por esse atributo que conseguimos recuperar e alterar o valor nas variáveis
                     * value -> o valor que foi digitado pelo usuário, este valor é armazenado na variável do formData sempre que o usuário digita algo
                     * onChange -> Dispara um evento, que quando o campo é alterado (seja por digitar algo ou por apagar algo), chama a função handleChange
                     */}
                    <input
                        placeholder='Idade'
                        type="number"
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    {/** Entrada de texto para a envergadura do animal
                     * placeholder -> exibe no campo uma mensagem que é apaga quando o usuário digita algo, isso serve para ajudar o usuário a saber o que aquele campo representa
                     * type -> indica que o tipo de dado que o campo aceita é do tipo number (números)
                     * name -> indica o nome do campo, é por esse atributo que conseguimos recuperar e alterar o valor nas variáveis
                     * value -> o valor que foi digitado pelo usuário, este valor é armazenado na variável do formData sempre que o usuário digita algo
                     * onChange -> Dispara um evento, que quando o campo é alterado (seja por digitar algo ou por apagar algo), chama a função handleChange
                     */}
                    <input
                        placeholder='Envergadura'
                        type="number"
                        name="envergadura"
                        value={formData.envergadura}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    {/** Campo de seleção de opções, indica os gêneros que são possíves de serem utilizados
                     * name -> indica o nome do campo, é por esse atributo que conseguimos recuperar e alterar o valor nas variáveis
                     * value -> o valor que foi digitado pelo usuário, este valor é armazenado na variável do formData sempre que o usuário digita algo
                     * onChange -> Dispara um evento, que quando o campo é alterado (seja por digitar algo ou por apagar algo), chama a função handleChange
                     * 
                     * option -> cria uma lista com as opções que o usuário pode selecionar
                     * option - value -> o valor que foi selecionado pelo usuário, este valor é armazenado na variável do formData sempre que o usuário seleciona uma opção
                     */}
                    <select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                    >
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                        <option value="desconhecido">Desconhecido</option>
                    </select>
                </label>
                <label>
                    {/** Campo de seleção de opções, indica os habitats que são possíves de serem utilizados
                     * name -> indica o nome do campo, é por esse atributo que conseguimos recuperar e alterar o valor nas variáveis
                     * onChange -> Dispara um evento, que quando o campo é alterado (seja por digitar algo ou por apagar algo), chama a função handleChange
                     * 
                     * option -> cria uma lista com as opções que o usuário pode selecionar
                     * option - value -> o valor que foi selecionado pelo usuário, essa lista é preenchida dos habitats que vieram do servidor através da função fetchHabitats
                     */}
                    <select
                        name="idHabitat"
                        onChange={handleChange}
                    >
                        {/* Verifica se o array de habitats está vazio, a função map só é chamada se o array tiver conteúdo */}
                        {habitats && habitats.length > 0 && habitats.map(habitat => (
                            <option key={habitat.idhabitat} value={habitat.idhabitat}>
                                {habitat.nomehabitat}
                            </option>
                        ))}
                    </select>
                </label>
                {/* Botão para enviar o formulário
                * quando clicado dispara o evento do formulário (onSubmit)
                */}
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default FormAnimal;