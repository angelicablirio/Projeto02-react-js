import React, {useState} from 'react'
import './App.css'
import TabelaDestinos from './componentes/Tabela'
import PesquisaCategoria from './componentes/PesquisaCategoria'

export default function App(){
  const [pais, setPais]=useState('')
  return(
    <>
      <main>
      <h1>Encontre os destinos mais visitados de cada país!</h1>
      <div className='conteudo'>
        <PesquisaCategoria pais={pais} sp={setPais}/>
        <TabelaDestinos pais={pais}/>
      </div>
      </main>

    </>
  )
}