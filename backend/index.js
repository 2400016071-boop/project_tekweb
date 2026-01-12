const express = require("express");
const cors = require("cors");

const transactionsRoute = require("./routes/transactions");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTE UTAMA
app.use("/transactions", transactionsRoute);

app.get("/", (req, res) => {
  res.send("Backend Event Ticket Jalan 🚀");
});

app.listen(3000, () => {
  console.log("Backend jalan di http://localhost:3000");
});
