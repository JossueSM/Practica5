
const express=require('express');
const app = express();
const port = 3001;



app.use(express.json());

app.use('/usuarios',require ('./routes/usuarios'))


app.listen(port)
console.log('Servidor corriendo en el puerto 3000')
       
 module.exports=app 