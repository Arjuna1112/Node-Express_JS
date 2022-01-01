const Grocery = require("../models/grocery");
const asyncWrapper = require("../middleware/async");
const { createCustomAPIError } = require("../error/custom-error");

const getAllItems = asyncWrapper(async (req, res) => {
  const items = await Grocery.find({});
  res.status(201).json({ items });
});

const addItem = asyncWrapper(async (req, res) => {
  const item = await Grocery.create(req.body);
  res.status(201).json({ item });
});

const editItem = asyncWrapper(async (req, res) => {
  const item = await Grocery.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    // 3rd parameter heps to fetch new updated value and run validator on the updated value,
    // without this will get in return od value (the one before update) and validator will not run against new value
    { new: true, runValidators: true }
  );
  if (!item)
    return next(createCustomAPIError(`No item with Id ${req.params.id}`, 404));
  else res.status(201).json(item);
});

const deleteItem = asyncWrapper(async (req, res) => {
  const item = await Grocery.findOneAndDelete({ _id: req.params.id });
  if (!item)
    return next(createCustomAPIError(`No item with Id ${req.params.id}`, 404));
  else res.status(201).json({ msg: "Deleted Sucessfully" });
});

const getItem = asyncWrapper(async (req, res, next) => {
  const item = await Grocery.findOne({ _id: req.params.id });
  if (!item)
    return next(createCustomAPIError(`No item with Id ${req.params.id}`, 404));
  res.status(201).json({ item });
});

module.exports = { getAllItems, addItem, editItem, deleteItem, getItem };
