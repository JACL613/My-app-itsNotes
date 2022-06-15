import {React,} from 'react'
import avatarServices from '../services/avatarServices'
import ShowTogglable from './showTogglable'

function ListAvatars({setSelect, select}) {

  const Avatars = avatarServices.arrayAvatars()
  return (
    <div>
    <ShowTogglable
      buttomLaberOpen={"Elegir Avatar"}
      buttomLaberClose={"cerrar"}
    >
    {
    Avatars.map(item => {
      return(
      <buttom type="button" className="d-inline-block m-2 " id={`${select === item.ref?"Activo":"Inactivo"}`} onClick={() => {setSelect(item.ref);}}><img src={item.img} id="btn-scale" /></buttom>
    )})
  }
    </ShowTogglable>
  </div>
  )
}

export default ListAvatars