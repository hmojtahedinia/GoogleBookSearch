const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const db = require("../../models");

// Matches with "/api/books"
router
  .route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
