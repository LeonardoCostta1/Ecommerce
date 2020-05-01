const express = require('express');

const routes = express.Router();
const controller = require('../controller')

routes.get('/products',controller.getProducts)

module.exports = routes;