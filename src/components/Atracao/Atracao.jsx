import imgNotFound from '../../assets/img-not-found.png'; // Importando recurso para o componente
import style from './Atracao.module.css'

function Atracao() {
    return (
        <div className={style.ctnAtracao}>
            <img src={imgNotFound} />
            <p>Lorem Ipsum</p>
        </div>
    );
}

export default Atracao;