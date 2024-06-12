//rutas para el usuario
import express from 'express'

const router = express.Router()

router.get('/test', (req, res) => {
    res.json({
        message: 'Soy la ruta del usuario'
    })
})

export default router