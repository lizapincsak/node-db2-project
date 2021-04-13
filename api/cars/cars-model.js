const db = require("../../data/db-config.js")

const getAll = () => {
    return db("cars")
}

const getById = (id) => {
  return db("cars")
  .where("id", id)
  .first()
}

const create = (car) => {
  if(car){
    return db("cars").insert(car)
      .then(([id]) => {
        return getById(id)
      })
  }
}

module.exports = {
  getAll, getById, create
}