import './Home.css'
import Atracao from '../../components/Atracao/Atracao';
import Welcome from '../../components/Welcome/Welcome';
import Navegacao from '../../components/Navegacao/Navegacao';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }

    return (
        <>
            {/* Renderiza o componente Navegacao.jsx */}
            <Navegacao />
            {/* Renderiza o componente Welcome.jsx */}
            <Welcome />
            <div className="ctn-atracoes">
                {/* Renderiza o componente Atracao.jsx */}
                {componentes}
            </div>
        </>
    );
}

export default Home;