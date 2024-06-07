import './Fotos.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import ImgCarrossel from '../../components/ImgCarrossel/ImgCarrossel';

function Fotos() {
    return(
        <>
            {/* Renderiza o componente Navegacao.jsx */}
            <Navegacao />
            <h1 className='h1-fotos'>Fotos</h1>
            {/* Renderiza o componente ImgCarrossel.jsx */}
            <ImgCarrossel />
        </>
    );
}

export default Fotos