import React from 'react'
import ItemNotes from './ItemNotes'

function TableNotes({notas , handelQuery, handelSetNote , handelSetLayout}) {
  return (
    <div className="bg-white border border-2 border-dark overflow-scroll" style={{maxHeigth: '40vh'}}>
        <table className="table mb-0">
  <thead>
    <tr>
      <th scope="col" className="bg-danger">delete</th>
      <th scope="col" className="bg-success">update</th>
      <th scope="col" className="bg-warning">Title</th>
      <th scope="col" className="bg-light">Content</th>
      <th scope="col" className="bg-info">User</th>
    </tr>
  </thead>
  <tbody >
    {
     notas
     ?  notas.map((item) => {
     
        return(
        <ItemNotes handelChildrenSetLayout={handelSetLayout} handelChildrenSetNote={handelSetNote} handelQueryItem={handelQuery} keyId={item.id} noteTitle={item.title} noteContent={item.content} noteNameuser={item.userAuthor.nameuser}/>
      )})
    : <div>no hay notas</div>
    }
</tbody>
</table>
    </div>
  )
}

export default TableNotes