const Rental = require("./models/rental");

class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Nice view on ocean",
        city: "San Francisco",
        street: "main Street",
        category: "condo",
        image:
          "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 4,
        shared: true,
        description: "very nice apartment in center of the city",
        dailyRate: 43
      },
      {
        title: "Nice view on ocean",
        city: "San Francisco",
        street: "main Street",
        category: "condo",
        image:
          "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 4,
        shared: false,
        description: "very nice apartment in center of the city",
        dailyRate: 43
      },
      {
        title: "Nice view on ocean",
        city: "New York",
        street: "Time Square",
        category: "apartment",
        shared: true,
        image:
          "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 1,
        description: "very nice apartment in center of the city",
        dailyRate: 11
      }
    ];
  }

  dothis() {
    return new Promise((resolve, reject) => {
      Rental.remove({}, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  pushRentalsToDb() {
    return new Promise((resolve, reject) => {
      this.rentals.forEach(rental => {
        const newRental = new Rental(rental);

        resolve(newRental.save());
      });
    });
  }

  seedDB() {
    this.dothis().then(data => {
      console.log(data);
      this.pushRentalsToDb().then((err, msg) => {
        console.log("saved");
        console.log(msg);
        Rental.find({}, (err, rentals) => {
          if (err) {
            console.log(err);
          }
          console.log("printing rentals");
          console.log(rentals);
        });
      });
    });
  }
}

module.exports = FakeDb;
