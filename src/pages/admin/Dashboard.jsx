import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import DataTable from "../../components/admin/DataTable";
import EditEventDialog from "../../components/admin/EditEventDialog";
import { useEvents } from "../../hooks/useEvents";

export default function Dashboard() {
  const { events, deleteEvent, updateEvent } = useEvents();
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F3E6DB]">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-6">
          <DataTable
            events={events}
            onDelete={deleteEvent}
            onEdit={(event) => {
              setSelectedEvent(event);
              setOpenEdit(true);
            }}
            onTambah={() => navigate("/admin/events/create")}
          />
        </div>
      </div>

      <EditEventDialog
        open={openEdit}
        onOpenChange={setOpenEdit}
        event={selectedEvent}
        onSave={updateEvent}
      />
    </div>
  );
}
