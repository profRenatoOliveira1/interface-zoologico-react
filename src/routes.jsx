import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Cadastro from './pages/Cadastro/Cadastro';

function AppRoutes() {
    return (
        <>
            <Roteador>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route path='/animais' Component={Animais} />
                    <Route path='/fotos' Component={Fotos} />
                    <Route path='/cadastro' Component={Cadastro} />
                </Routes>
            </Roteador>
        </>
    );
}

export default AppRoutes;