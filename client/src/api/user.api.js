//Conectar los datos del back del usuario al cliente o front
import axios from 'axios'

export const registerUser = async (register) => {
    try {
        await axios.post('http://localhost:4000/register', register)
    } catch (error) {
        console.log(error.response.data)
    }
}