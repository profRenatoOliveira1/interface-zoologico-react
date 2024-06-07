import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Cadastro from './pages/Cadastro/Cadastro';
import Depoimentos from './pages/Depoimentos/Depoimentos';
import ListagemAnimais from './pages/Listagem/ListagemAnimais';

function AppRoutes() {
    return (
        <>
            {/* Cria um BrowseRouter para lidar com a navegação entre páginas */}
            <Roteador>
                {/* Cria uma lista de rotas da aplicação */}
                <Routes>
                    {/* Cria uma rota para acessar cada componente
                    * exact -> indica que vai procurar aquela rota específica
                    * path -> indica o caminho da rota (tem que ser algum que esteja no menu de navegação)
                    * Component -> Indica a página que será renderizada
                    */}
                    <Route exact path='/' Component={Home} />
                    <Route path='/animais' Component={Animais} />
                    <Route path='/fotos' Component={Fotos} />
                    <Route path='/cadastro/animais' Component={Cadastro} />
                    <Route path='/depoimentos' Component={Depoimentos} />
                    <Route path='/listar/animais' Component={ListagemAnimais} />
                </Routes>
            </Roteador>
        </>
    );
}

export default AppRoutes;