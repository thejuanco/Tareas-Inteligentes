import express from 'express';

import userRouter from './routes/user.routes.js';
import { db } from './database/db.js';

const app = express()

const port = 4000

app.use(userRouter)

app.get('/firts', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Probando la conexion a la base de datos
try {
    await db.authenticate();
    console.log('Conectado con la base de datos')
} catch (error) {
    console.error(`No se pudo conectar a la base de datos ${error}`)
}