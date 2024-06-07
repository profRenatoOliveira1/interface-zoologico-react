import FormAnimal from '../../components/Formularios/FormAnimal';
import Navegacao from '../../components/Navegacao/Navegacao';
import './Cadastro.css';

function Cadastro() {
    return (
        <>
            {/* Renderiza o componente Navegacao.jsx */}
            <Navegacao />
            {/* Renderiza o componente FormAnimal.jsx */}
            <FormAnimal />
        </>
    );
}

export default Cadastro;