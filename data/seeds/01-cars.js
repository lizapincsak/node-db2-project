exports.seed = function(knex){
    return knex("cars").truncate()
        .then(function () {
            return knex("cars").insert([
                {vin: "12344", make: "Dodge", model: "ram", mileage:35, title: "Big truck", transmission: "12"},
                {vin: "111111", make: "Ford", model: "mustang", mileage:35, title: "sports car"},
                {vin: "123222244", make: "Jeep", model: "wranger", mileage:35, transmission: "12"}
            ])
        })
}