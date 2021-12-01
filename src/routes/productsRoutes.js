const express = require('express')
const { getAllPrudcts, getProductsById } = require('../controllers/productsControllers')

const productsRoutes = express.Router()

productsRoutes.get("/", getAllPrudcts)

productsRoutes.get('/unProducto', getProductsById )

module.exports = productsRoutes