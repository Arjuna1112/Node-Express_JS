const notFound = (req, res) => res.status(404).send("Route Doesn't Exit");

module.exports = notFound;
