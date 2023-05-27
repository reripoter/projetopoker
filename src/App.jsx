import './App.css';
import imgcalculadora from "./assets/calculadora.PNG"
import { RiCalculatorFill } from 'react-icons/ri'

function App() {
  return (
    <div className="app-container">
      <h1>Controle Seções Poker</h1>
      <div className="button-container">
        <button className="button">Add Seção</button>
        <button className="button">Ver Seções</button>
        <button className="button">Ver em Gráficos</button>
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
