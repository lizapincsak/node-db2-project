const express = require("express")

const server = express()

const CarRouter = require("./cars/cars-router.js");

server.use(express.json());

server.use('/api/cars', CarRouter);

module.exports = server
