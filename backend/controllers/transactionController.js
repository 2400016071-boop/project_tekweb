// controllers/transactionController.js

// SIMPAN DATA SEMENTARA (dummy database)
let transactions = [];

exports.createTransaction = (req, res) => {
  try {
    const {
      customer_name,
      phone,
      event_name,
      ticket_qty,
      total_price,
      payment_method,
      channel,
    } = req.body;

    // VALIDASI SEDERHANA
    if (!event_name || !ticket_qty || !total_price) {
      return res.status(400).json({
        success: false,
        message: "Data transaksi tidak lengkap",
      });
    }

    // BUAT ID TRANSAKSI
    const transactionId = `TRX${Date.now()}`;

    // SIMPAN TRANSAKSI
    const newTransaction = {
      id: transactionId,
      customer_name,
      phone,
      event_name,
      ticket_qty,
      total_price,
      payment_method,
      channel,
      status: "Menunggu",
      created_at: new Date(),
    };

    transactions.push(newTransaction);

    // FORMAT PESAN WHATSAPP
    const message = `
Halo Admin 👋
Saya ingin konfirmasi pembelian tiket:

ID Transaksi: ${transactionId}
Nama Event: ${event_name}
Jumlah Tiket: ${ticket_qty}
Total Harga: Rp ${total_price.toLocaleString("id-ID")}
Metode Pembayaran: ${payment_method}

Terima kasih 🙏
    `;

    const whatsappNumber = "6281388609934"; // NO ADMIN
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // RESPONSE KE FRONTEND
    res.status(201).json({
      success: true,
      message: "Transaksi berhasil dibuat",
      data: newTransaction,
      whatsapp_url: whatsappUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};
