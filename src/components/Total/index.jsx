import React from 'react'
import { DivTotal } from './style'

const Total = ({transaction}) => {

  return (
    <DivTotal>
      <div>
      <h3>Valor total:</h3> <p>${transaction.reduce((acc, act)=> act.type === "entrada" ? acc + act.value : acc - act.value,0)}</p>
      </div>
      <span>O valor se refere ao saldo</span>
      
    </DivTotal>
  )
}
export default Total