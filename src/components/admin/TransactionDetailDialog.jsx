import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function TransactionDetailDialog({
  open,
  onOpenChange,
  transaction,
}) {
  if (!transaction) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Detail Transaksi</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">ID Transaksi</p>
            <p className="font-medium">{transaction.id}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Tanggal & Waktu</p>
            <p>{transaction.date}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Customer</p>
            <p>{transaction.customer}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Event</p>
            <p>{transaction.event}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Jumlah Tiket</p>
            <p>{transaction.ticket}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Total Pembayaran</p>
            <p className="font-semibold">
              Rp{transaction.total.toLocaleString("id-ID")}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">Metode Pembayaran</p>
            <p>{transaction.payment}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Channel</p>
            <p>{transaction.channel}</p>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded text-xs font-semibold ${
              transaction.status === "Berhasil"
                ? "bg-green-100 text-green-700"
                : transaction.status === "Menunggu"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {transaction.status}
          </span>

          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
