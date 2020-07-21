const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/MIXXD"
);

const drinkSeed =
{
    title: ["Tom Colins"],
    video: "http://youtube.com",
    instructions: "gin, simple syrup, muddled lime, muddled lemon, club soda", 
    image: "http://google.images.com",
    ingredients: "gin, sugar, lemon, lime, club soda",
}


db.Drink
    .remove({})
    .then(() => db.Drink.collection.insertMany(drinkSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });