
import { Card } from '../Card'
import { DivBtnList, TagUl } from './style'
import { useEffect, useState } from 'react'
import { EmptyExtract } from '../EmptyExtract'

function List({transaction, setTransaction}) {
  const hendleDelet =(card)=>{
    setTransaction(transaction.filter(element=>  card !==element))
    setFilter(filter.filter(element=>  card !==element))
  }

  const [filter, setFilter] = useState(transaction)
  const filterEntrada=()=>{
    setFilter(transaction.filter(element => element.type === "entrada" ))
  }
  const filterSaida=()=>{
    setFilter(transaction.filter(element => element.type === "saida" ))
  }
  const todos=()=>{
    setFilter(transaction)
  }
  useEffect(()=>{
  //primeira dependencia do User
  //o meu user começa com [] entao maneira mais facil foi passando
  // user effter para toda vez que o transaction form mudado ele enviar 
  // essa auteração para minha dependencia 
    setFilter(transaction)
  },[transaction])
  
  return (
    <div>
      <DivBtnList>
        <p>Resumo Finaceiro</p>
        <div>
          <button className='btnTodos' onClick={()=>todos()}>todos</button>
          <button className='btnFilter'onClick={()=> filterEntrada()} >Entradas</button>
          <button  className='btnFilter' onClick={()=> filterSaida()}>Despesas</button>
        </div>
      </DivBtnList>
      
        <TagUl>
          {
            filter.length === 0 ?(
             <EmptyExtract/>
            ):(              
              filter.map((element, i) => (
                <Card key={i} element={element} hendleDelet={hendleDelet} />
              ))
            )             
          }
        </TagUl>
      
    </div>
  )
}

export default List
