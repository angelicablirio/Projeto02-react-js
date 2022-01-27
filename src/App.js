import React, {useState} from 'react'
import './App.css'

const destinos=[
  {local:"Salvador-BA", pais:"Brasil", tipo:"praia"},
  {local:"Rio de janeiro-RJ", pais:"Brasil", tipo:"praia"},
  {local:"São Paulo-SP", pais:"Brasil", tipo:"cidade"},
  {local:"Londres", pais:"Inglaterra", tipo:"cidade"},
  {local:"Liverpool", pais:"Inglaterra", tipo:"cidade"},
  {local:"York", pais:"Inglaterra", tipo:"cidade"},
  {local:"Oxford", pais:"Inglaterra", tipo:"cidade"},
  {local:"Lisboa", pais:"Portugal", tipo:"cidade"},
  {local:"Sintra", pais:"Portugal", tipo:"cidade"},
  {local:"Porto", pais:"Portugal", tipo:"cidade"},
  {local:"Algarve", pais:"Portugal", tipo:"praia"},
  {local:"Paris", pais:"França", tipo:"cidade"},
  {local:"Marcella", pais:"França", tipo:"praia"},
  {local:"Nice", pais:"França", tipo:"praia"},
  {local:"Edimburgo", pais:"Escócia", tipo:"cidade"},
  {local:"Glasgow", pais:"Escócia", tipo:"cidade"},
  {local:"Inverness", pais:"Escócia", tipo:"cidade"},
  {local:"Ilha de Sky", pais:"Escócia", tipo:"ilha"},
  {local:"Madrid", pais:"Espanha", tipo:"cidade"},
  {local:"Toledo", pais:"Espanha", tipo:"cidade"},
  {local:"Barcelona", pais:"Espanha", tipo:"praia"}
]

const linhas=(p)=>{
  const li = []
  destinos.forEach(
    (destino)=>{
      if(destino.pais.toUpperCase() == p.toUpperCase() || p.toUpperCase() == ''){
        li.push(
          <tr>
            <td>{destino.local}</td>
            <td>{destino.pais}</td>
            <td>{destino.tipo}</td>
          </tr>
        )
      }
    }
  )
  return li
}
const tabelaDestinos=(pais)=>{
  return(
    <table>
      <thead>
        <tr>
          <th>Destino</th>
          <th>País</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
      {linhas(pais)}
    </table>
  ) 
}

const pesquisaCategoria=(pais, sp)=>{
  return(
    <div>
      <label>Digite o nome do país: </label>
      <input type="text" value={pais} onChange={(e)=>sp(e.target.value)}/>
    </div>
  )
}

export default function App(){
  const [pais, setPais]=useState('')

  return(
    <>
      <main>
      <h1>Encontre os destinos mais visitados de cada país!</h1>
      <div className='conteudo'>
        {pesquisaCategoria(pais, setPais)}
        {tabelaDestinos(pais)}
      </div>
      </main>

    </>
  )
}