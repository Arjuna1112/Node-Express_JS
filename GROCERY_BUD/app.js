const connectDb = require("./db/connect");
const express = require("express");
const items = require("./routes/grocery");
const notFound = require("./routes/not-found");
const errorHandler = require("./error/error-handler");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/v1/items", items);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
