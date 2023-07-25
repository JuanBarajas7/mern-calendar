const express = require('express');
const { dbConnection } = require('./database/config');
const  cors  = require('cors');
require('dotenv').config();


// Crear el servidor de express
const app = express();

// Base de datos

dbConnection();

// CORS
app.use(cors());

// Directorio público
app.use(express.static('public'));


// Lectura y parseo del body. Las peciciones que vengan en formato JSON se procesan aquí y podremos extrar el contenido
app.use(express.json());


// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})

// lo había escrito ya que en un tutorial de como desplegar en vercel lo pusieron
// app.get("/",(req,res)=>{
//     res.send("La pagina de inicio");
// });