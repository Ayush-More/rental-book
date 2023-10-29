/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
const catchAsync = require("./../util/catchAsync");
const book = require("./../Model/bookModel");
const multer = require("multer");

exports.getBooksByType = catchAsync(async (req, res, next) => {
  const books = await book.find({
    type: { $eq: req.params.type },
  });
  res.status(200).json({
    status: "success",
    data: {
      books,
    },
  });
});

const storage = multer.diskStorage({
  destination: "./../../src/images",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

(exports.rentBook = upload.single("bookImage")),
  catchAsync(async (req, res) => {
    const newBookData = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      expectingRent: req.body.expectingRent,
      bookImage: req.file.filename,
      type: req.body.genre,
    };

    const newBook = await book.create(newBookData);
    console.log("success");

    res.status(201).json({
      status: "success",
      data: {
        data: newBook,
      },
    });
  });
