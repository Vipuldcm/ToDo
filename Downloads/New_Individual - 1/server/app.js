const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const usersRoutes = require("./routes/users");
const transactionsRoutes = require("./routes/transactions");
const fundraisesRoutes = require("./routes/fundraises");
const dotenv= require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/users", usersRoutes);
app.use("/transactions", transactionsRoutes);
app.use("/fundraises", fundraisesRoutes);


console.log(process.env.DB_CONNECTION);
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected to DB!"));

// start listening to the server
app.listen(process.env.PORT || 8081, () => console.log("Listening to port 8081"));
