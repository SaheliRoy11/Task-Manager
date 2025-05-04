
//Since 404 is a standard HTTP response code and not an Error, hence it will not get caught in an error middleware, thus we use this middleware.
module.exports = function( req, res, next) {
    return res.status(404).send('Route does not exist');
}