import './FormAnimal.css';
import { useState, useEffect } from 'react';

function FormAnimal() {

    const [formData, setFormData] = useState({
        nome: '',
        genero: 'macho',
        idade: '',
        envergadura: '',
        idHabitat: '1'
    });

    // State para armazenar os habitats cadastrados no banco
    const [habitats, setHabitats] = useState([]);
    const [habitatAnimal, setHabitatAnimal] = useState(1);

    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        //console.log(JSON.stringify(formData));
        fetch("http://localhost:3000/novo/ave", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                // Trate a resposta do servidor conforme necessário
                console.log('Formulário enviado com sucesso');
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };

    useEffect(() => {
        const fetchHabitats = async () => {
            try {
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
                  } catch (error) {
                    console.error('Erro:', error);
                    // Em vez de apenas logar o erro, você pode decidir como lidar com ele aqui
                    throw error; // Lança o erro para que quem chame a função possa tratá-lo
                  }
            } catch (error) {
                console.error('Erro ao buscar habitats:', error);
            }
        };

        fetchHabitats();
    }, []);

    const atualizaHabitat = (e) => {
        // Atualiza a variável habitatAnimal com o valor selecionado no select
        const novoHabitat = e.target.value;
        setHabitatAnimal(novoHabitat);
        console.log(novoHabitat);
    }

    return (
        <>
            <h2>Cadastro de Ave</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        placeholder='Nome da ave'
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        placeholder='Idade'
                        type="number"
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        placeholder='Envergadura'
                        type="number"
                        name="envergadura"
                        value={formData.envergadura}
                        onChange={handleChange}
                    />
                </label>
                <label>
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
                    <select
                        onChange={atualizaHabitat}
                    >
                        {/* Verifica se o array de habitats está vazio, a função map só é chamada se o array tiver conteúdo */}
                        {habitats && habitats.length > 0 && habitats.map(habitat => (
                            <option key={habitat.idhabitat} value={habitat.idhabitat}>
                                {habitat.nomehabitat}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default FormAnimal;