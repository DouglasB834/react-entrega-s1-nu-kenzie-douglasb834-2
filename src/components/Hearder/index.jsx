import { TagHearder } from "./style"
import logo from "../../img/logo.png"


import React from 'react'

const HeaderDash =({setPage})=> {
  return (
    <TagHearder>
        <div className="container">
            <img src={logo}  alt="fdp" />
            <button className="miniBtn" onClick={()=>setPage(false)}>Logout</button>
        </div>

    </TagHearder>
  )
}

export default HeaderDash

