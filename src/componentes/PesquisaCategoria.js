import React from 'react'

export default function pesquisaCategoria(props){
    return(
        <div>
          <label>Digite o nome do país: </label>
          <input type="text" value={props.pais} onChange={(e)=>props.sp(e.target.value)}/>
        </div>
      )
}