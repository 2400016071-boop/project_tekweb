import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import DataTable from "../../components/admin/DataTable";
import { useEvents } from "../../hooks/useEvents";

export default function Dashboard() {
  const { events, deleteEvent } = useEvents();

  return (
    <div className="flex min-h-screen bg-brown-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />
        <div className="p-6">
          <DataTable events={events} onDelete={deleteEvent} />
        </div>
      </div>
    </div>
  );
}


