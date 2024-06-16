//rutas para el usuario
import express from 'express'

import { loginUser } from '../controller/userControllers.js' 

const router = express.Router()

router.get('/login', loginUser)

router.get('/test', (req, res) => {
    res.json({
        message: 'Soy la ruta del usuario'
    })
})

export default router