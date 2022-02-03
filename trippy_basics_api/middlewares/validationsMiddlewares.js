const expressValidator = require('express-validator')

const validationHotels = [
    expressValidator.body(["name", "address", "city", "country"]).exists().isString(),
    expressValidator.body("stars").exists().isInt({ min: 1, max: 7 }),
    expressValidator.body(["hasSpa", "hasPool"]).isBoolean(),
    expressValidator.body("priceCategory").isInt({ min: 1, max: 3 })
]

module.exports = validationHotels