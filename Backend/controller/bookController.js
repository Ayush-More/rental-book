const catchAsync = require("./../util/catchAsync");
const book = require("./../Model/bookModel");
const multer = require("multer");
const path = require("path");

exports.getBooksByType = catchAsync(async (req, res, next) => {
  let query = {};
  if (req.params.type !== "all") {
    query.type = req.params.type;
  }
  const books = await book.find(query);
  res.status(200).json({
    status: "success",
    data: {
      books,
    },
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/books"); // Specify the relative path to your project directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    const fileName = file.fieldname + "-" + uniqueSuffix + extname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

exports.rentBook = upload.single("bookImage");

exports.createBook = catchAsync(async (req, res) => {
  const newBookData = {
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    expectingRent: req.body.expectingRent,
    bookImage: req.file.fieldname,
    type: req.body.type,
  };

  const newBook = await book.create(newBookData);

  res.status(201).json({
    status: "success",
    data: {
      data: newBook,
    },
  });
});

exports.getBookById = catchAsync(async (req, res, next) => {
  const Book = await book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({
      status: "error",
      message: "Book not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      Book,
    },
  });
});
