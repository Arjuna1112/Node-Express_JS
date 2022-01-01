const express = require("express");
const {
  getAllItems,
  addItem,
  editItem,
  deleteItem,
  getItem,
} = require("../controller/grocery");

const router = express.Router();

router.route("/").get(getAllItems).post(addItem);
router.route("/:id").get(getItem).patch(editItem).delete(deleteItem);

module.exports = router;
