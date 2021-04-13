const Car = require("./cars-model");

const checkCarId = async(req, res, next) => {
  try{
    const id = await Car.getById(req.params.id)
    if(!id){
      res.status(404).json({message: `car with id ${id} is not found`})
    } else {
      req.id = id
      next()
    }
  }
  catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  if(!req.body.vin){
    res.status(400).json({message: `${req.body.vin} is missing`})
  } else if(!req.body.make){
    res.status(400).json({message: `${req.body.make} is missing`})
  } else if(!req.body.model){
    res.status(400).json({message: `${req.body.model} is missing`})
  } else if(!req.body.mileage){
    res.status(400).json({message: `${req.body.mileage} is missing`})
  } else {
    req.body.vin = req.body.vin.trim()
    req.body.make = req.body.make.trim()
    req.body.model = req.body.model.trim()
    req.body.mileage = req.body.mileage.trim()
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const vin = await Car.getAll()
  
  } 
  catch(err){
    next(err)
  }
}

module.exports = {
  checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid
}