const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log("params? ",req.query.query)
  
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q="+req.query.query+"&key=AIzaSyCz0Apw6_rHN-v3hEg5pSGLIkZlK4SFQrg")
    .then(results => res.json(results.data)
  
    
    )
  
});

module.exports = router;


// https://www.googleapis.com/books/v1/volumes?q="+{ params: req.query }+"+inauthor:keyes&key=AIzaSyCz0Apw6_rHN-v3hEg5pSGLIkZlK4SFQrg
