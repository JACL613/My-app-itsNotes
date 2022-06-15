import React from 'react'
import avatarServices from '../services/avatarServices'
import noteServices from '../services/noteServices'
function CardUser({user, setUser}) {
    const Avatars = avatarServices.arrayAvatars()

    const handelCloseSesion = () => {
        setUser(null)
        window.localStorage.removeItem('loggedAppUser')
        noteServices.setToken('')
      }
    if(!user || user == null){
        return <div className="container bg-danger" > No hay usuario</div>
      }
      return (
      <div className="container bg-success" >
        <img src={Avatars[user.data.refAvatar].img} id="btn-scale" />
        <h1>Username: {user.data.username}</h1>
        <div className="pb-2  row justify-content-center">
          <button onClick={handelCloseSesion} style={{width: '40%'}} className="btn btn-primary px-1" ><span className="bi bi-arrow-up-right-circle"/>close sesion</button>
        </div>
       </div>
      )
}

export default CardUser