import imgNotFound from '../../assets/img-not-found.png'; // Importando recurso para o componente
import './Atracao.css'

function Atracao() {
    return (
        <div className="ctn-atracao">
            <img src={imgNotFound} />
            <p>Lorem Ipsum</p>
        </div>
    );
}

export default Atracao;