const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

// Import and use the profile route
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

// Example MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running")))
  .catch((err) => console.log(err));
