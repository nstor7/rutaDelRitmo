import express from 'express'
const app = express()

app.use(express.static('public') )

app.listen(3000, () => console.log('servidor iniciado con express en el puerto 3000'))