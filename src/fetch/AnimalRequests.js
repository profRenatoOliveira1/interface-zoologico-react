/**
 * Classe para tratar as requisições ao servidor relacionadas
 * a entidade Animal
 */
class AnimalRequests {

    /**
     * Construtor
     */
    constructor() {
        // URL do servidor (endereço)
        this.serverUrl = 'http://localhost:3000';
        // Rota para listar os objetos
        this.routeListarAnimal = '/aves';
        // Rota para cadastrar um novo objeto
        this.routeCadastrarAnimal = '/novo/ave';
        // Rota para remover um objeto
        this.routeDeletarAnimal = '/remover/animal';
        // Rota para atualizar um objeto
        this.routeAlterarAnimal = '/atualizar/animal';
    }

    /**
     * Busca todas as informações de animais cadastrados no servidor
     * 
     * @returns Lista com os animais em formato JSON
     */
    async listarAnimais() {
        // Tenta fazer a busca
        try {
            // Faz a consulta (fetch) na API utilizado a URL do servidor e a rota
            // e retorna a resposta para a variável response
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimal}`);
            
            // Verifica se o status da responsa deu alguma problema
            if (!response.ok) {
                // Se deu problema, irá lançar um erro
                throw new Error('Erro ao buscar servidor');
            }
            
            // Se a consulta foi feita com sucesso, vai pegar as informações, transformar em um JSON 
            // e armazenas na variável listaAnimais
            return await response.json();
        
        // Caso algo de errado aconteça, é lançada uma excessão
        } catch (error) {
            // Caso aconteceça algum erro durante o processo, é lançada uma excesão
            console.error('Erro: ', error);
            // retorna um objeto null
            return null;
        }
    }

    /**
     * Envia um objeto do tipo animal ao servidor para que seja persistido
     * 
     * @param {*} animal Objeto do tipo animal 
     * @returns **true** caso o objeto tenha sido enviado com sucesso, **false** caso aconteça algum erro no meio do caminho
     */
    async cadastrarAnimal(animal) {
        // Tenta fazer a busca
        try {
            // Faz a consulta (fetch) na API utilizado a URL do servidor e a rota
            await fetch(`${this.serverUrl}${this.routeCadastrarAnimal}`, {
                // Método POST, usado para mandar uma informação para o servidor
                method: 'POST',
                // Cabeçalho da requisição
                headers: {
                    // Especifica que as informações trocadas entre cliente e servidor
                    // serão no formato JSON
                    'Content-Type': 'application/json'
                },

                // Envia o objeto do tipo animal no corpo da requisição
                // JSON.stringify converte uma string em um JSON
                body: JSON.stringify(animal)
            })
            // Trata a resposta da requisção
            .then(response => {
                // Verifica se o status da responsa deu alguma problema
                if(!response.ok) {
                    // caso haja algum problema é lançado um erro com uma mensagem
                    throw new Error('Erro ao cadastrar animal');
                }

                // Informa no log da página que o formulário foi enviado com sucesso
                console.log('Formulário enviado com sucesso');

                // Retorna o valor true para quem chamou a função
                return true;
            })

        // Caso algo de errado aconteça, é lançada uma excessão
        } catch (error) {
            // Caso aconteceça algum erro durante o processo, é lançada uma excesão
            console.error('Erro: ', error);
            // Retorna o valor false para quem chamou a função
            return false;
        }
    }

    /**
     * Deleta um animal do servidor
     * 
     * @param {*} idAnimal ID do animal a ser deletado
     * @returns **verdadeiro (true)** caso o animal tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    async deletarAnimal(idAnimal) {
        // Tenta fazer a busca
        try {
            // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do animal
            const response = await fetch(`${this.serverUrl}${this.routeDeletarAnimal}?idAnimal=${idAnimal}`, {
                // Informa o verbo a ser acessado
                method: 'DELETE'
            });
            // Verifica se a resposta não foi bem sucedida ...
            if (!response.ok) {
                // ... lança um erro
                throw new Error('Erro ao enviar formulário');
            }
            // retorna true caso a resposta seja bem sucedida
            return true;
        
        // Caso algo de errado aconteça, é lançada uma excessão
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            window.alert('Erro ao deletar animal');
            return null;
        }
    }
}

export default new AnimalRequests