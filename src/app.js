const express = require('express')
const databaseConnection = require('../config/database')
const productsRoutes = require('./routes/productsRoutes')
const path = require('path')

// Inicializar express
const app = express()

//Conectarnos a la DataBase
databaseConnection.connect()

// Routes
app.use('/products', productsRoutes)

// Configurations
app.set("views", path.join(__dirname, "views"))
app.set("view engine", ".ejs")

app.listen(5007, () =>{
    console.log('Servidor corriendo en puerto 5007')
})