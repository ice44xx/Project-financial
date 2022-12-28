import React from 'react'
import "./style.css"
import { BsFillArrowUpCircleFill,BsFillArrowDownCircleFill,BsFillTrash2Fill } from "react-icons/bs";


function grid ({dadosFin, onDelete}) {
  return (
    <div className='container-grid'>
      <table>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
        </tr>
        {dadosFin.map((dadosFin, index) => (
        <tr key={index}>
          <th>{dadosFin.descricao}</th>
          <th>R$ {Math.abs(dadosFin.valor).toFixed(2)}</th>
          <th className='thh'>{dadosFin.tipo === 1 ? (<BsFillArrowDownCircleFill color='red'/>) : (<BsFillArrowUpCircleFill color='green'/>)} 
          {<BsFillTrash2Fill className='trash' onClick={() => onDelete(index)}/>}
          </th>
        </tr>
        ))}
      </table>
    </div>
  )
}

export default grid