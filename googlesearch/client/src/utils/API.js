import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    console.log("in api.js ",query)
    
    return axios.get("/api/books", { params: { query } });
  },
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
