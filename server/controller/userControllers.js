import { connection } from "../db.js"

export const loginUser = (req, res) => {
    return res.json({message: "Desde el login"})
}

export const registerUser = (req, res) => {
    return res.json({message: "Desde el registro"})
}

export const ping = async (req, res) => {
    try {
        const [results, fields] = await connection.query('SELECT * FROM Ping')
        console.log(results[0])
        console.log(fields)
        res.json(results)
    } catch (error) {
        console.error(error)
    }
}