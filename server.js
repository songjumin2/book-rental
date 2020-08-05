const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const users = require("./routes/users");
const books = require("./routes/books");
const rentals = require("./routes/rentals");

const app = express();
app.use(express.json());

app.use("/api/v1/users", users);
app.use("/api/v1/books", books);
app.use("/api/v1/rentals", rentals);

const PORT = process.env.PORT || 6200;
app.listen(PORT, console.log("서버 가동"));
