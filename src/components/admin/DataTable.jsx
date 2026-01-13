import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function DataTable({ events, onDelete, onEdit, onTambah }) {
  const navigate = useNavigate();

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [events, search]);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow">
        {/* HEADER */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-semibold text-[#5C3A21]">Data Event</h2>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Cari event..."
              value={search}
              onChange={handleSearch}
              className="w-56"
            />
            <Button
              className="bg-[#5C3A21] hover:bg-[#8B5E3C]"
              onClick={onTambah}
            >
              + Tambah Event
            </Button>
          </div>
        </div>

        {/* TABLE */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gambar</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Kuota</TableHead>
              <TableHead className="text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedEvents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                  Event tidak ditemukan
                </TableCell>
              </TableRow>
            ) : (
              paginatedEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>
                    Rp {Number(event.price).toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell>{event.quota}</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onEdit(event)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        setSelectedEvent(event);
                        setOpenDelete(true);
                      }}
                    >
                      Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="p-4 border-t">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  />
                </PaginationItem>

                <PaginationItem>
                  <span className="px-4 text-sm text-muted-foreground">
                    Halaman {page} dari {totalPages}
                  </span>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setPage((p) => Math.min(p + 1, totalPages))
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>

      {/* DIALOG HAPUS */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Event</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-gray-600">
            Yakin ingin menghapus event <b>{selectedEvent?.name}</b>?
          </p>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDelete(false)}>
              Batal
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                onDelete(selectedEvent.id);
                setOpenDelete(false);
              }}
            >
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}