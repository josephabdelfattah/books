const express = require("express");
// const fs = require("fs");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const routes = require('./routes');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}


app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}/`); 
});