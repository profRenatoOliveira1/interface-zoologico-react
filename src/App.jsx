import './App.css'
import Navegacao from './components/Navegacao/Navegacao'
import Atracao from './components/Atracao/Atracao'

function App() {
  const componentes = [];
  for(let i = 0; i <= 2; i++) {
    componentes.push(<Atracao key={i} />)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <div className="ctn-atracoes">
        {componentes}
      </div>
    </>
  )
}

export default App
