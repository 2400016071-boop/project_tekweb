import { useEffect, useState } from "react";

export default function AdminTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-6">Loading transaksi...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Transaksi</h1>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Event</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td className="border p-2">{t.id}</td>
              <td className="border p-2">{t.customer_name}</td>
              <td className="border p-2">{t.event_name}</td>
              <td className="border p-2 text-center">{t.ticket_qty}</td>
              <td className="border p-2">
                Rp {Number(t.total_payment).toLocaleString("id-ID")}
              </td>
              <td className="border p-2">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
