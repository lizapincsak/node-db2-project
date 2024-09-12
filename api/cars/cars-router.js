
const Car = require("./cars-model.js");
const router = require("express").Router();

const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require("./cars-middleware.js");
const dbConfig = require("../../data/db-config.js");

router.get("/", async (req, res, next) => {
    try{
        const data = await Car.getAll()
        res.json(data)
    }
    catch(err){
        next(err)
    }
})

router.get("/:id", checkCarId, (req, res) => {
    res.status(200).json(req.id)
})


router.post("/", checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try{
        const car = await Car.create(req.body)
        res.json(car)
    }
    catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
  })

module.exports = router;