const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./Routes/api");

//  mongoose
mongoose.connect("mongodb://localhost:27017/flashcards", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//  check if connected to the database
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

//  Cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  HTTP request Logger
app.use(morgan("tiny"));

//Routes
app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting on ${PORT}`));
