const errorHandler = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: "Somethign went worng Please try again..." });
};

module.exports = errorHandler;
