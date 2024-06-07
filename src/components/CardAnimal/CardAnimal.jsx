import imgNotFound from '../../assets/img-not-found.png'
import './CardAnimal.css';

/**
 * Função que representa o componente para exibir as informações de um animal dentro de um card
 * 
 * @param {*} animal Objeto do tipo animal 
 * @returns Código HTML que renderiza um card com informações de um animal
 */
function CardAnimal({ animal }) {

    // Função simples, apenas exibe o id do animal e suas informações no log do navegador
    const exibeID = () => {
        console.log(animal.idanimal, "\n", animal);
    }
    
    return (
        <div className='card-animal'>
            <img src={imgNotFound} alt="Imagem não encontrada" onClick={exibeID} />
            {/* Cria um parágrafo para cada informação do animal dentro da propriedade passada por parâmetro para o componente */}
            <p><b>Nome:</b>{animal.nomeanimal}</p>
            <p><b>Idade:</b>{animal.idadeanimal}</p>
            <p><b>Genero:</b>{animal.generoanimal}</p>
            <p><b>Envergadura:</b>{animal.envergadura}</p>
        </div >
    );
}

export default CardAnimal