import React from 'react';
import noteService from '../services/noteServices';

const ItemNotes = ({keyId,noteTitle, noteContent,noteNameuser , handelQueryItem,handelChildrenSetNote,handelChildrenSetLayout}) => {

    const handelBorrar = async (id) => {
        console.log(id)
        const request = await noteService.Delete({id: id})
        handelQueryItem()

    }
    return ( 
        <tr>
          <th className="bg-danger" scope="row"><buttom onClick={() => {handelBorrar(keyId)}}>borrar</buttom></th>
          <th className="bg-success" scope="row"><buttom onClick={() => {handelChildrenSetNote({noteTitle, noteContent, noteNameuser}); handelChildrenSetLayout('coments')}} >Actualizar</buttom></th>
          <td className="bg-warning">{noteTitle}</td>
          <td className="bg-light">{noteContent}</td>
          <td className="bg-info">@{noteNameuser}</td>
        </tr>
    )
}

export default ItemNotes;
