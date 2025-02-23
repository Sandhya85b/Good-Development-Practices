const express = require("express");
const connectToDb = require("./config/mongo.config");
const userRouter = require("./routes/user.route");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

if (process.env.NODE_ENV == "testing") {
  require("dotenv").config({ path: ".env.testing" });
} else if (process.env.NODE_ENV == "production") {
  require("dotenv").config({ path: ".env.production" });
} else {
  require("dotenv").config();
}

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "This is test route" });
  } catch (err) {
    res.status(500).json({ msg: "Error in test route" });
  }
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  connectToDb();
  console.log("Connected to PORT");
});

module.exports = app;
