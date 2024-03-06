import './Welcome.css'
import animaiscover from '../../assets/animais-cover.png'

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome-container">
                <h1>Bem-vindo</h1>
                <p>Seja bem-vindo ao Zoologico</p>
                <p>Aqui você pode conhecer melhor nossa estrutura e nossas atrações</p>
            </div>

            <img src={animaiscover} alt="apresentacao-zoo" className='welcome-image'/>
        </div>
    );
}

export default Welcome;
