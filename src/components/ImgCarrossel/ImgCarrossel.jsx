import './ImgCarrossel.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import jsonData from '../../assets/json/imagens.json';

function ImgCarrossel() {
    
    // State para armazenar o caminho da imagem
    const [imgCarrossel, setImgCarrossel] = useState([]);

    // Hook para ler a informação contida no recurso jsonData e armazenar dentro da variável imgCarrossel
    // !!! Toda informação obtida através de um meio externo ao código (arquivos, bancos de dados, api, etc)
    // obrigatoriamente tem que ser feitos dentro do Hook useEffect !!!
    useEffect(() => {
        // utiliza o método setImgCarrossel definido no useState para atribuir valores a variável imgCarrossel
        setImgCarrossel(jsonData);
    });

    return (
        <div className='ctn-carrossel'>
            <Carousel>
                {/* Cada objeto dentro da variável imgCarrossel, será atribuido a uma variável temporária chamada animal
                * Para cada animal, as imformações referente a ele serão inseridas no carrossel
                * key -> todo componente react que irá renderizar várias vezes na mesma página precisa de um valor que identifique ele unicamente, para isso, utilizamos o índice do objeto
                * interval -> define o intervalo de tempo (em milisegundos) que a imagem ficará na tela antes de ser trocada 
                */}
                {imgCarrossel.map(animal => (
                    <Carousel.Item key={animal.index} interval={3000}>
                        <img
                            className="d-block w-100"
                            src={animal.src}
                            alt={animal.index}
                        />
                        <Carousel.Caption>
                            <h3>{animal.caption}</h3>
                            <p>{animal.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>))}
            </Carousel>
        </div>
    );
}

export default ImgCarrossel;