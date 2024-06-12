import express from 'express';

import userRouter from './routes/user.routes.js';

const app = express()

const port = 4000

app.use(userRouter)

app.get('/firts', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})