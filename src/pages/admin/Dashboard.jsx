import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import DataTable from "../../components/admin/DataTable";
import { useEvents } from "../../hooks/useEvents";

export default function Dashboard() {
  const { events, deleteEvent } = useEvents(); // ambil deleteEvent

  return (
    <div className="flex min-h-screen bg-[#F3E6DB]">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-6">
          {/* kirim deleteEvent ke DataTable */}
          <DataTable events={events} onDelete={deleteEvent} />
        </div>
      </div>
    </div>
  );
}
