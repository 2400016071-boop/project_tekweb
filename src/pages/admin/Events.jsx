import { useState } from "react";
import { useEvents } from "@/hooks/useEvents";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import EditEventDialog from "@/components/admin/EditEventDialog";

export default function Events() {
  const { events, deleteEvent, updateEvent } = useEvents();

  // ===== SEARCH =====
  const [search, setSearch] = useState("");

  // ===== EDIT =====
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // ===== DELETE =====
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ===== PAGINATION =====
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  // ===== FILTER (ANTI ERROR) =====
  const filteredEvents = events.filter((event) =>
    event.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);

  const paginatedEvents = filteredEvents.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      {/* ===== SEARCH ===== */}
      <div className="max-w-sm">
        <Input
          placeholder="Cari nama event..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* ===== TABLE ===== */}
      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-left">Tanggal</th>
                <th className="px-4 py-3 text-left">Lokasi</th>
                <th className="px-4 py-3 text-left">Tiket</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {paginatedEvents.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    Event tidak ditemukan
                  </td>
                </tr>
              )}

              {paginatedEvents.map((event) => {
                const progress =
                  event.quota > 0
                    ? Math.round((event.sold / event.quota) * 100)
                    : 0;

                return (
                  <tr
                    key={event.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium">
                      {event.name}
                    </td>

                    <td className="px-4 py-3">{event.date}</td>

                    <td className="px-4 py-3">{event.location}</td>

                    <td className="px-4 py-3 w-56">
                      <Progress value={progress} />
                      <p className="text-xs mt-1">
                        {event.sold} / {event.quota} tiket
                      </p>
                    </td>

                    <td className="px-4 py-3 text-center space-x-2">
                      {/* ===== EDIT ===== */}
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          setSelectedEvent(event);
                          setOpenEdit(true);
                        }}
                      >
                        Edit
                      </Button>

                      {/* ===== DELETE ===== */}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setDeleteId(event.id);
                          setOpenDelete(true);
                        }}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* ===== PAGINATION ===== */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              size="sm"
              variant={page === i + 1 ? "default" : "outline"}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}

      {/* ===== EDIT DIALOG ===== */}
      <EditEventDialog
        open={openEdit}
        onOpenChange={setOpenEdit}
        event={selectedEvent}
        onSave={updateEvent}
      />

      {/* ===== DELETE DIALOG ===== */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Event?</DialogTitle>
            <DialogDescription>
              Event yang dihapus tidak dapat dikembalikan.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpenDelete(false)}
            >
              Batal
            </Button>

            <Button
              variant="destructive"
              onClick={() => {
                deleteEvent(deleteId);
                setOpenDelete(false);
                setDeleteId(null);
              }}
            >
              Ya, Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
