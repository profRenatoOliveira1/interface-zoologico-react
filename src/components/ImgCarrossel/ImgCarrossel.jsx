import './ImgCarrossel.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import jsonData from '../../assets/json/imagens.json';

function ImgCarrossel() {
    const [imgCarrossel, setImgCarrossel] = useState([]);

    useEffect(() => {
        setImgCarrossel(jsonData);
    });

    return (
        <div className='ctn-carrossel'>
            <Carousel>
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