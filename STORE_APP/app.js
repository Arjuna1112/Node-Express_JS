require("dotenv").config();
require("express-async-errors");
const express = require("express");
const errorHandler = require("./error/errorHandler");
const notFound = require("./error/not-found");
const connectDb = require("./db/connect");
const api = require("./routes/product");

const app = express();
app.use(express.json());

app.use("/api/v1/products", api);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running in port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
