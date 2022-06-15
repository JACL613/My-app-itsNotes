import axios from 'axios'
const baseUrl = 'http://localhost:3300/api/notes'

let token 
let NotaUp

const setToken = newToken => {
    token = `Bearer ${newToken}` 
}

const create = async (objNote ) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    console.log(token)
    const request = axios.post(`${baseUrl}/createNote`,objNote,config)
    return request.then((response) => response.data)
}

const getAll = async (objNote) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    const request = axios.get(`${baseUrl}/`,config)
    return request.then((response) => response.data)
}

const Delete = async (objNote) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    const request = axios.delete(`${baseUrl}/${objNote.id}`,config)
    return request.then((response) => response.data)
}
const noteUpdate = (objEdit) => {
    NotaUp = objEdit
    console.log(NotaUp)
    
}
const note = () => {
    console.log(NotaUp)
    return NotaUp
}
export default {setToken , create , getAll , Delete, noteUpdate , note }