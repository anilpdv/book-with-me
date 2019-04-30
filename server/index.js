const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Rental = require("./models/rental");
const fakeDB = require("./fake-db.js");
const app = express();

const rentalRoutes = require("./router/rentals");
mongoose
  .connect(config.db_uri, { useNewUrlParser: true })
  .then(data => {
    console.log("db is connected!");
    const fakeDb = new fakeDB();

    fakeDb.seedDB();
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/v1/rentals", rentalRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("app is start and running" + port);
});
