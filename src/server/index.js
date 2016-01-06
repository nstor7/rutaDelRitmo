var express= require('express')
var app = express()

app.use(express.static('src/client') )

app.listen(3000, () => console.log('servidor iniciado con express en el puerto 3000'))