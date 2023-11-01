const express = require("express");
const bookController = require("../controller/bookController");

const router = express.Router();

/* GET users listing. */
router
  .get("/:type", bookController.getBooksByType)
  .post("/addbooks", bookController.rentBook, bookController.createBook)
  .get("/detail/:id", bookController.getBookById);

module.exports = router;
