const demoMiddleware = ((req, res, next) => {
    console.log(`Cats original: ${req.originalUrl}`);
    next();
})

module.exports = demoMiddleware;