import { HomepageStyle } from "./style"
import React from 'react'
import Group from "../../img/Group 262.png"

const HomePage =({setPage})=> {

  return (

    <HomepageStyle>
        <div className="leyout">

            <h2><span>Nu</span> Kenzie</h2>
            <h1>Centralize o controle das suas finanças</h1>
            <span>de forma rápida e segura</span>
            <div className="btnIniciar">

            <button onClick={()=>setPage(true)}>Iniciar</button>      

            </div>
        </div>
        
        <figure className="figure">
            <img src={Group} alt="" />
        </figure>

        
    </HomepageStyle>
  )
}
export default HomePage
