import React, { useState } from 'react'
import Form from '../Form'
import HeaderDash from '../Hearder'
import List from '../List'
import Total from '../Total'
import { TagMain } from './style'




export const DashBoard =({setPage})=> {
  
  const [transaction, setTransaction ] = useState([

    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
    
  ])
  return (
    <TagMain>
      <div className='container_form'>

      <HeaderDash setPage={setPage} />
        <div className='div__form_list'>

        <Form setTransaction={setTransaction}>
          <Total transaction={transaction}/>
        </Form>

      
        <List transaction={transaction}/>

        </div>

      </div>
      
    </TagMain>
  )
}


