import {React ,useState} from 'react'
import userServices from '../services/loginServices'
import noteServices from '../services/noteServices'

function FormLoginUser(props) {
    const [nameuser,setNameuser] = useState('')
    const [password,setPassword] = useState('')
    
    const handelLoginUser = async (event) => {
        event.preventDefault()
        console.log(nameuser,password)
       const user = await userServices.login({nameuser, password})
       window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
       noteServices.setToken(user.token)
       props.handelSetUser(user)
       props.handelNote()

       setNameuser('')
       setPassword('')
       console.log(user)
    }
  return (
    <div>
        <form onSubmit={handelLoginUser}>
            
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

export default FormLoginUser