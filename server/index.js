const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoute");
const publicRoutes = require("./routes/publicRoute");

const allowedOrigins = [
  "http://184.94.212.7:5173",
  "http://184.94.212.7:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "http://rmjautos.com",
  "http://www.rmjautos.com",
  "https://rmjautos.com",
  "https://www.rmjautos.com",
];

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    // origin:'https://rmjautos.com',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

// variables
const port = process.env.PORT || 4000;
const dbURI = process.env.DATABASE;

const allowCors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", allowedOrigins);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //     Add other necessary headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Add more headers if needed
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
};

// Apply the middleware globally
//app.use(allowCors);

// defining routes
app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/public", publicRoutes);

// connect to the database and start the server
mongoose
  .connect(dbURI, {})
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log("server listening on " + port);
    });
  })
  .catch((err) => {
    console.error("error connecting to Database", err.message);
  });
