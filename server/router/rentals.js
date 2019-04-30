const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("", (req, res) => {
  r = {};
  Rental.find({}, (err, data) => {
    r.rentals = data;
    res.json(r);
  });
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId, (err, rental) => {
    if (err) {
      res
        .status(422)
        .send({
          errors: [{ title: "Rental Error", detail: "couldnot find Rental" }]
        });
    }
    res.json(rental);
  });
});
module.exports = router;
