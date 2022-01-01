require("dotenv").config();

const connectDb = require("./db/connect");
const product = require("./models/product");
const jsonProduct = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(jsonProduct);
    console.log("Db Connected Successfully...");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
