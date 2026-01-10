import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/admin/DataTable";
import EditEventDialog from "../../components/admin/EditEventDialog";
import { useEvents } from "../../hooks/useEvents";

export default function Dashboard() {
  const { events, deleteEvent, updateEvent } = useEvents();
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {/* KONTEN DASHBOARD (tanpa Sidebar & Header) */}
      <div className="space-y-4">
        <DataTable
          events={events}
          onDelete={deleteEvent}
          onEdit={(event) => {
            setSelectedEvent(event);
            setOpenEdit(true);
          }}
          onTambah={() => navigate("/admin/event-create")}
        />
      </div>

      {/* DIALOG EDIT EVENT */}
      <EditEventDialog
        open={openEdit}
        onOpenChange={setOpenEdit}
        event={selectedEvent}
        onSave={updateEvent}
      />
    </>
  );
}
