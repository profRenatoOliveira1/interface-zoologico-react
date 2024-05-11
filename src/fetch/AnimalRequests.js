class AnimalRequests {

    constructor() {
        this.serverUrl = 'http://localhost:3000';
        this.routeListarAnimal = '/listar-aves';
        this.routeCadastrarAnimal = '/novo/ave';
        this.routeDeletarAnimal = '/remover/animal';
        this.routeAlterarAnimal = '/atualizar/animal';
    }

    async listarAnimais() {
        try {
            // Faz a consulta (fetch) na API e retorna a resposta para a variável response
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimal}`);
            // Verifica se o status da responsa deu alguma problema
            if (!response.ok) {
                // Se deu problema, irá lançar um erro
                throw new Error('Erro ao buscar servidor');
            }
            // Se a consulta foi feita com sucesso, vai pegar as informações, transformar em um JSON 
            // e armazenas na variável listaAnimais
            return await response.json();
        } catch (error) {
            // Caso aconteceça algum erro durante o processo, é lançada uma excesão
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Deleta um animal do servidor
     * 
     * @param {*} idAnimal ID do animal a ser deletado
     * @returns **verdadeiro (true)** caso o animal tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    async deletarAnimal(idAnimal) {
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
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            window.alert('Erro ao deletar animal');
            return null;
        }
    }
}

export default new AnimalRequests