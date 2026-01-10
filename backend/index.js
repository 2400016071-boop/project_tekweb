const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// routes
const transactionRoutes = require("./routes/transactions");
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Backend jalan di http://localhost:${PORT}`);
});
