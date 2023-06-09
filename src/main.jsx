import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddSecao from './AddSecao.jsx'
import VerSecoes from './Versecoes.jsx'
import VerEmGraficos from './VerEmGraficos.jsx'
import SimularSecao from './SimularSecao.jsx'
import CalcTexas from './CalcTexas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/add-secao' element={<AddSecao />}></Route>
      <Route path='/ver-secoes' element={<VerSecoes />}></Route>
      <Route path='/ver-em-graficos' element={<VerEmGraficos />}></Route>
      <Route path='/simularsecao' element={SimularSecao}></Route>
      <Route path='/calc-texas' element={CalcTexas}></Route>
    </Routes>
   </BrowserRouter>
    
  </React.StrictMode>,
)
