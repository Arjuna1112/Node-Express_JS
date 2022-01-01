const { CustomAPIError } = require("../error/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError)
    return res.status(err.statusCode).json({ mag: err.message });
  return res.status(500).json({ name: err.name, msg: err.message });
};

module.exports = errorHandler;
