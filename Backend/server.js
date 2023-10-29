const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const bookModel = require("./Model/bookModel");
const cors = require("cors");

const app = require("./app");
app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

dotenv.config({ path: "./config.env" });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // Gracefully shut down the server
  server.close(() => {
    process.exit(1); // Exit the application with a non-zero status code
  });
});

//Import Data
const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "book.json"), "utf-8")
);

const importData = async () => {
  try {
    await bookModel.create(jsonData);
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};
// console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
}
