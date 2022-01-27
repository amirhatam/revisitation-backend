const expressValidator = require('express-Validator')
const passwordValidator = require('password-Validator')

const validate = (req, res, next) => {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
        // TODO: send the information about the validation errors
        res.status(400).json({ errors: errors.array() })
    } else {
        next()
    }

}

const validationSignup = [
    expressValidator.body('email').exists().isEmail(),
    expressValidator.body('password').exists().isString().custom(value => {
        const schema = new passwordValidator()

        schema
            .is().min(7) // Minimum length 8
            .is().max(30) // Maximum length 30
            .has().uppercase() // Must have uppercase letters
            .has().lowercase() // Must have lowercase letters
            .has().digits(1) // Must have at least 2 digits
            .has().not().spaces() // Should not have spaces
            .is().not().oneOf(["Salut-12"])

        return schema.validate(value)
    }),
    validate

]

module.exports = { validationSignup }