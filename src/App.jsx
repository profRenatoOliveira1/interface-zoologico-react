import './App.css'
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import { BrowserRouter as Roteador, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Roteador>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/animais' Component={Animais} />
        </Routes>
      </Roteador>
    </>
  )
}

export default App
