import AdminHeader from "../../components/admin/AdminHeader";
import EventForm from "../../components/admin/EventForm";
import DataTable from "../../components/admin/DataTable";
import { useEvents } from "../../hooks/useEvents";

export default function Dashboard() {
  const { events } = useEvents();

  return (
    <>
      <AdminHeader />
      <div className="p-6">
        <EventForm />
        <DataTable events={events} />
      </div>
    </>
  );
}

