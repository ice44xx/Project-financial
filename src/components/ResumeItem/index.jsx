import React from 'react'
import "./style.css"

const index = ({title, Icon, value}) => {
  return (
    <div className='container-items'>
      <div className="title-items">
        {title}
        <div className='color-icon'>{Icon}</div>
      </div>
      <div className="total-items">
        <h2>R$ {value}</h2>
      </div>
    </div>
  )
}

export default index