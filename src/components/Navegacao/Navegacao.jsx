import './Navegacao.css';
import { Link } from 'react-router-dom';

function Navegacao() {

    return (
        <div className="barra-navegacao">
            <div className="logo-zoo">
                <h1><Link style={{ color: "#A7A000" }} to="/">ZOOLÓGICO</Link></h1>
            </div>

            <div className="navbar-opcoes">
                <ul>
                    <li>
                        {/* Componente Link que trata as rotas da aplicação 
                        * to -> indica a rota que será acessada quando este elemento for selecionado
                        */}
                        <Link style={{ color: "#A7A000" }} to="/">Início</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/animais">Os Animais</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/fotos">Fotos</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/depoimentos">Depoimentos</Link>
                    </li>
                    
                    {/* Menu dropdown com as opções de cadastro */}
                    <li className="dropdown">
                        <span className="dropdown-button">Cadastros</span>
                        <ul className="dropdown-content">
                            <li><Link style={{ color: "#A7A000" }} to="/cadastro/animais">Animais</Link></li>
                            <li><Link style={{ color: "#A7A000" }} to="/cadastro/habitat">Habitat</Link></li>
                            <li><Link style={{ color: "#A7A000" }} to="/cadastro/atracao">Atração</Link></li>
                        </ul>
                    </li>
                    
                    {/* Menu dropdown com as opções de listagem */}
                    <li className="dropdown">
                        <span className="dropdown-button">Listar</span>
                        <ul className="dropdown-content">
                            <li><Link style={{ color: "#A7A000" }} to="/listar/animais">Animais</Link></li>
                            <li><Link style={{ color: "#A7A000" }} to="/listar/habitat">Habitat</Link></li>
                            <li><Link style={{ color: "#A7A000" }} to="/listar/atracao">Atração</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navegacao;