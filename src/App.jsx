import './App.css'
import Navegacao from './components/Navegacao/Navegacao'
import Atracao from './components/Atracao/Atracao'
import Welcome from './components/Welcome/Welcome';

function App() {
  const componentes = [];
  for(let i = 0; i <= 2; i++) {
    componentes.push(<Atracao key={i} />)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <Welcome />
      <div className="ctn-atracoes">
        {componentes}
      </div>
    </>
  )
}

export default App
