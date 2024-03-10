const express = require("express");
const bookController = require("../controller/bookController");
const authController = require("./../controller/authController");

const router = express.Router();

/* GET users listing. */
router
  .get("/:type", authController.protect, bookController.getBooksByType)
  .post(
    "/addbooks",
    authController.protect,
    bookController.rentBook,
    bookController.createBook
  )
  .get("/detail/:id", authController.protect, bookController.getBookById);

module.exports = router;
