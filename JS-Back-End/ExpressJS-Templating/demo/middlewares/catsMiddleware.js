const catsMiddleware = ((req, res, next) => {
    console.log(`Cats MIDDLE EARTH: ${req.path}`);
    next();
})

module.exports = catsMiddleware;