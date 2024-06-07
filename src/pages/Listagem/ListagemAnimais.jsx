import styles from './ListagemAnimais.module.css';
import ListaAnimais from '../../components/Tabelas/ListaAnimais';
import Navegacao from '../../components/Navegacao/Navegacao';

function ListagemAnimais() {
    return (
        <>
            {/* Renderiza o componente Navegacao.jsx */}
            <Navegacao />
            <h1 className={styles.headerAnimais}>Animais</h1>
            {/* Renderiza o componente ListaAnimais.jsx */}
            <ListaAnimais />
        </>
    );
}

export default ListagemAnimais;