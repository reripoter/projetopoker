import './App.css'
import { RiCalculatorFill } from 'react-icons/ri'


function App() {
  return (
    <div className="app-container">
      <h1>Controle Seções Poker</h1>
      <div className="button-container">
        <button className="button">
          <a href="add-secao">Add Seção</a>
        </button>
        <button className="button">
          <a href='ver-secoes'>Ver Seções</a>
          </button>
        <button className="button">
          <a href='ver-em-graficos'>Ver em Gráficos</a>
          </button>
        <button className="button">Simular Seção</button>
        <button className="button ">
          Calculadora Texas <RiCalculatorFill />
        </button>
        <button className="button">Calculadora Omaha 4</button>
        <button className="button">Calculadora Omaha 5</button>
        <button className="button">Calculadora</button>
        <button className="button">Sair</button>
      </div>
    </div>
  );
}

export default App;
