const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    //idDrink
    _id: { type: String },
    // strDrink
    title: { type: String },
    // strVideo
    video: { type: String },
    //strInstructions
    instructions: { type: String },
    // strDrinkThumb
    image: { type: String },
    // strIngredient1, strIngredient2 etc.
    ingredients: { type: String }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;