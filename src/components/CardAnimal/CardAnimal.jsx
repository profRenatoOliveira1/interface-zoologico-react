import imgNotFound from '../../assets/img-not-found.png'
import './CardAnimal.css'

function CardAnimal() {
    return (
        <>
            <div className="ctn-cardanimal">
                <img src={imgNotFound} />
                <p>Lorem Ipsum</p>
            </div>
        </>
    );
}

export default CardAnimal