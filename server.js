const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env

// const { DB_HOST } = require('./config')

// console.log(process.env.DB_HOST)


mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful!!!");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

