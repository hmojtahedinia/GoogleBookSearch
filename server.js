const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
// define connection to DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooksearch"
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "client/build"));
}

// Define API routes here
app.use(require("./routes"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  console.log(process.env.NODE_ENV);
});
