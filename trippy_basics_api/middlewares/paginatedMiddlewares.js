
// const paginatedResults = (req, res, next) => {
function paginatedResults(model) {
    return (req, res, next) => {
        const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
        const page = parseInt(req.query.page);// Make sure to parse the page to number


        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {} //add results section in array data

        //add next & previous data in array data 
        // if (endIndex < tables.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
        // }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        results.results = model.slice(startIndex, endIndex)

        res.paginatedResults = results
        next()
    }
}

module.exports = paginatedResults
