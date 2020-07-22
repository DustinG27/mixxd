import axios from "axios";

export default {
  // Gets all books
  getDrink: function() {
    return axios.get("/api/drinks");
  },
  // Gets the book with the given id
  geDrink: function(id) {
    return axios.get("/api/drinks/" + id);
  },
  // Deletes the book with the given id
  deletDrink: function(id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a book to the database
  savDrink: function(drinkData) {
    return axios.post("/api/drinks", drinkData);
  }
};
