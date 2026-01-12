const express = require("express");
const router = express.Router();
const db = require("../db");

// ===============================
// POST TRANSAKSI
// URL: http://localhost:3000/transactions
// ===============================
router.post("/", (req, res) => {
  console.log("🔥 DATA MASUK:", req.body);

  const {
    customer_name,
    phone,
    event_name,
    ticket_qty,
    total_payment
  } = req.body;

  // VALIDASI
  if (
    !customer_name ||
    !phone ||
    !event_name ||
    !ticket_qty ||
    !total_payment
  ) {
    return res.status(400).json({
      message: "Data tidak lengkap"
    });
  }

  const transactionId = "TRX-" + Date.now();

  const sql = `
    INSERT INTO transactions
    (id, customer_name, phone, event_name, ticket_qty, total_payment, status, channel, payment_method)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    transactionId,
    customer_name,
    phone,
    event_name,
    ticket_qty,
    total_payment,
    "Menunggu",
    "WhatsApp",
    "Transfer"
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error("❌ ERROR MYSQL:", err);
      return res.status(500).json({
        message: "Gagal simpan transaksi"
      });
    }

    res.json({
      message: "Transaksi berhasil",
      transaction_id: transactionId
    });
  });
});

// ===============================
// GET SEMUA TRANSAKSI (CEK MYSQL)
// URL: http://localhost:3000/transactions
// ===============================
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM transactions ORDER BY created_at DESC",
    (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json(rows);
    }
  );
});

module.exports = router;
