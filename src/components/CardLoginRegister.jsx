import React from 'react'
import FormLoginUser from './FormLoginUser'
import FormCreateUser from './FormCreateUser'
import ShowTogglable from './showTogglable'

import noteServices from '../services/noteServices'

function CardLoginRegister({setNotas , setUser}) {
  return (
    <div>
     <ShowTogglable 
     buttomLaberOpen={<span className="bi bi-arrow-up-right-circle"/>}
     buttomLaberClose={<span className="bi bi-box-arrow-in-left"/>}
     titleComponent="Create User"
     >
       <FormCreateUser  handelSetUser={(newUser)=>{setUser(newUser)}} />
     </ShowTogglable>

    <ShowTogglable
     buttomLaberOpen={<span className="bi bi-arrow-up-right-circle"/>}
     buttomLaberClose={<span className="bi bi-box-arrow-in-left"/>}
     titleComponent="Login User"
    >
      <FormLoginUser 
        handelSetUser={(newUser)=>{setUser(newUser)}}
        handelSetNote={()=>{  
    const data = noteServices.getAll()
    setNotas(data)}}
        />
    </ShowTogglable>
    </div>
  )
}

export default CardLoginRegister