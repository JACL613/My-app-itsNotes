import {React, useState} from 'react';
import noteServices from '../services/noteServices'
const FormCreateNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handelCreateNote = async (event) => {
        event.preventDefault()
        const note = await noteServices.create({title,content})
        setTitle('')
        setContent('')
        console.log(note)
    }
    return (
        <div>
           <form onSubmit={handelCreateNote}>
               <div className="mb-3 row d-block">
                   <label for="staticTitle" className='col-sm-2 col-form-label'>Title</label>
                   <div className="col-sm-10">
                    <input 
                    type="text" 
                    className="form-control"
                    id='staticTitle'
                    value={title}
                    placeholder="Ingrese el titulo de la nota"
                    onChange={({target}) => setTitle(target.value)}
                    />

                   </div>
               </div>
               <div className="mb-3 row d-block">
                   <label for="staticContent" className='col-sm-2 col-form-label'>Content</label>
                   <div className="col-sm-10">
                    <input 
                    type="text" 
                    className="form-control"
                    id='staticContent'
                    value={content}
                    placeholder="Ingrese el contenido de la nota"
                    onChange={({target}) => setContent(target.value)}
                    />

                   </div>
               </div>
                <div className="mb-1  row justify-content-center ">
                 <button type="submit" style={{width: '30%'}} className="btn btn-primary  " >Enviar</button>
                </div>
           </form> 
        </div>
    );
}

export default FormCreateNote;
