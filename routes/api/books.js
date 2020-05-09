// get external npm package
const router = require("express").Router();
// get internal database models
const booksController = require("../../controllers/booksController");

// retrieves all books in the database 
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

  router  
    .route("/:id")
    .delete(booksController.remove)

module.exports = router;
