import {React, useState} from 'react'
import userServices from '../services/loginServices'
import noteServices from '../services/noteServices'
import ListAvatars from './ListAvatars'

function FormCreateUser() {
  const [name,setName] = useState('')
  const [nameuser,setNameuser] = useState('')
  const [password,setPassword] = useState('')
  const [select , setSelect] = useState(0)

  const handelCreateUser = async (event) => {
    event.preventDefault();
    const user = await userServices.create({
      name,
      nameuser,
      password,
      refAvatar:select
    })
    setName('')
    setNameuser('')
    setPassword('')

  }
  return (
    <div>
      <form onSubmit={handelCreateUser}>

        <ListAvatars select={select} setSelect={(e) => {setSelect(e); console.log(e)}}/>
        <div className="mb-3 row d-block"> 
          <label  for="staticName" className="col-sm-2 col-form-label " >full name:</label>
          <div className="col-sm-10">
          <input 
          type="text" 
          className="form-control" 
          id="staticName" 
          value={name}
          placeholder="ingrese su nombre completo"
          onChange={({target}) => setName(target.value)}
          />
          </div>
        </div>

        <div className="mb-3 row d-block">
          <label for="staticNameuser" className="col-sm-2 col-form-label" >name user:</label>
         <div className="col-sm-10">
         <input 
         type="text" 
         className="form-control" 
         id="staticNameuser"
         value={nameuser}
         placeholder="ingrese su nombre de usuario"
         onChange={({target}) => setNameuser(target.value)} 
       />
         </div>
        </div>

        <div className="mb-4 row d-block">
          <label for="staticPassword" className="col-sm-2 col-form-label " >Password:</label>
          <div className="col-sm-10">
          <input 
          type="password" 
          className="form-control" 
          id="staticPassword"
          value={password}
          placeholder="ingrese su contraseña"
          onChange={({target}) => setPassword(target.value)}  
          />
          </div>
        </div>
        <div className="mb-1  row justify-content-center ">
          <button type="submit" style={{width: '30%'}} className="btn btn-primary  " >Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default FormCreateUser