import React from 'react'
import "./style.css"
import ResumeItem from "../ResumeItem/index"

import {BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
  BsCurrencyDollar} from "react-icons/bs"


const index = ({saldo, entrada, saida}) => {
  return (
    <div className='container'>
      <ResumeItem title = "Entradas" Icon = {<BsFillArrowUpCircleFill/>} value = {entrada} />
      <ResumeItem title = "Saídas" Icon = {<BsFillArrowDownCircleFill/>} value = {saida} />
      <ResumeItem title = "Saldo" Icon = {<BsCurrencyDollar/>} value = {saldo} />
    </div>
  )
}

export default index;
