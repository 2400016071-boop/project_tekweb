const express = require("express");
const router = express.Router();
const db = require("../db");

// POST transaksi via WhatsApp
router.post("/whatsapp", (req, res) => {
  const { customer_name, phone, event_name, ticket_qty, total_payment } =
    req.body;

  // generate ID transaksi
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
    "Transfer",
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Gagal simpan transaksi" });
    }

    const whatsappUrl = `https://wa.me/6281388609934?text=${encodeURIComponent(
      `Halo Admin, saya ingin konfirmasi pembayaran.\n\nID Transaksi: ${transactionId}`
    )}`;

    res.json({
      transaction_id: transactionId,
      whatsapp_url: whatsappUrl,
    });
  });
});

module.exports = router;
