import React from 'react'
import { Card } from '../Card'
import { DivBtnList, TagUl } from './style'
import  trash from "../../img/trash.png"

function List({transaction}) {
  console.log(transaction)
  return (
    <div>
      <DivBtnList>
        <p>Resumo Finaceiro</p>
        <div>
          <button className='btnTodos'>todos</button>
          <button className='btnFilter'>Entradas</button>
          <button  className='btnFilter' >Despesas</button>
        </div>
      </DivBtnList>
      
        <TagUl>
          {
              transaction.map((element, i)=> (
                <Card key={i}>

                <div className="div__extato">

                <p>{element.description}</p>

                <span>R${element.value}</span>
                
                <button><img src={trash} alt=""/></button>           
                </div>
                <span>{element.type}</span>

                </Card>

              ))
          }
        </TagUl>
      
    </div>
  )
}

export default List
