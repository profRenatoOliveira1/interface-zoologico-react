import styles from './ListagemAnimais.module.css';
import ListaAnimais from '../../components/Tabelas/ListaAnimais';
import Navegacao from '../../components/Navegacao/Navegacao';

function ListagemAnimais() {
    return (
        <>
            <Navegacao />
            <h1 className={styles.headerAnimais}>Animais</h1>
            <ListaAnimais />
        </>
    );
}

export default ListagemAnimais;