import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import TransactionDetailDialog from "@/components/admin/TransactionDetailDialog";

/* DATA DUMMY */
const transactionsData = [
  {
    id: "TRX001",
    date: "2025-01-05 10:30",
    customer: "Andi Pratama",
    event: "Music Fest 2025",
    ticket: 2,
    total: 300000,
    payment: "Transfer Bank",
    status: "Berhasil",
    channel: "WhatsApp",
  },
  {
    id: "TRX002",
    date: "2025-01-06 13:15",
    customer: "Siti Aisyah",
    event: "Tech Conference",
    ticket: 1,
    total: 150000,
    payment: "QRIS",
    status: "Menunggu",
    channel: "WhatsApp",
  },
  {
    id: "TRX003",
    date: "2025-01-06 15:45",
    customer: "Budi Santoso",
    event: "Startup Expo",
    ticket: 3,
    total: 450000,
    payment: "E-Wallet",
    status: "Gagal",
    channel: "WhatsApp",
  },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);

  const [openDetail, setOpenDetail] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const PER_PAGE = 6;

  /* FILTER DATA */
  const filteredData = useMemo(() => {
    return transactionsData.filter((trx) => {
      const matchSearch =
        trx.id.toLowerCase().includes(search.toLowerCase()) ||
        trx.customer.toLowerCase().includes(search.toLowerCase());

      const trxDate = new Date(trx.date);
      const matchStart = startDate ? trxDate >= new Date(startDate) : true;
      const matchEnd = endDate ? trxDate <= new Date(endDate) : true;

      return matchSearch && matchStart && matchEnd;
    });
  }, [search, startDate, endDate]);

  const paginatedData = filteredData.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const totalPages = Math.ceil(filteredData.length / PER_PAGE);

  /* EXPORT CSV */
  const exportCSV = () => {
    const header = Object.keys(transactionsData[0]).join(",");
    const rows = transactionsData
      .map((trx) => Object.values(trx).join(","))
      .join("\n");

    const blob = new Blob([header + "\n" + rows], {
      type: "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">Semua Transaksi</h2>
          <p className="text-sm text-muted-foreground">
            Kelola dan pantau seluruh transaksi penjualan tiket secara real time
          </p>
        </div>
        <Button onClick={exportCSV}>Export CSV</Button>
      </div>

      {/* FILTER */}
      <div className="flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Cari ID transaksi / Customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-64"
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <span className="text-sm">s/d</span>

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Transaksi</TableHead>
              <TableHead>Tanggal & Waktu</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Jumlah Tiket</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Metode</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Channel</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((trx) => (
              <TableRow
                key={trx.id}
                className="cursor-pointer hover:bg-muted"
                onClick={() => {
                  setSelectedTransaction(trx);
                  setOpenDetail(true);
                }}
              >
                <TableCell className="font-medium">{trx.id}</TableCell>
                <TableCell>{trx.date}</TableCell>
                <TableCell>{trx.customer}</TableCell>
                <TableCell>{trx.event}</TableCell>
                <TableCell>{trx.ticket}</TableCell>
                <TableCell>
                  Rp{trx.total.toLocaleString("id-ID")}
                </TableCell>
                <TableCell>{trx.payment}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      trx.status === "Berhasil"
                        ? "bg-green-100 text-green-700"
                        : trx.status === "Menunggu"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {trx.status}
                  </span>
                </TableCell>
                <TableCell>{trx.channel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <span className="text-sm flex items-center">
          Page {page} / {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>

      {/* DETAIL MODAL */}
      <TransactionDetailDialog
        open={openDetail}
        onOpenChange={setOpenDetail}
        transaction={selectedTransaction}
      />
    </div>
  );
}
