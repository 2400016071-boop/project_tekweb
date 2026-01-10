const mysql = require("mysql2");

// bikin koneksi
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",        // default XAMPP
  database: "event_ticket",
  port: 3306,
});

// test koneksi
db.connect((err) => {
  if (err) {
    console.error("❌ Gagal konek ke MySQL:", err.message);
  } else {
    console.log("✅ MySQL terkoneksi");
  }
});

module.exports = db;
