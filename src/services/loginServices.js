import axios from 'axios';
const baseUrl = 'http://localhost:3300/api/users'

const create = async (objCredentiales) => {
    const data = await axios.post(`${baseUrl}/create`,objCredentiales)
    return data
}
const login = async (objCredentiales) => {
    const data = await axios.post(`${baseUrl}/login`,objCredentiales)
    return data
}

export default {create,login}