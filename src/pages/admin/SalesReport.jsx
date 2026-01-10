import { useNavigate } from "react-router-dom";
import { useEvents } from "@/hooks/useEvents";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function SalesReport() {
  const { events } = useEvents();
  const navigate = useNavigate();

  // ===== HITUNG DATA RINGKAS =====
  const totalRevenue = events.reduce(
    (sum, e) => sum + e.sold * e.price,
    0
  );

  const totalTicketsSold = events.reduce(
    (sum, e) => sum + e.sold,
    0
  );

  const ongoingEvents = events.filter(
    (e) => new Date(e.date) >= new Date()
  ).length;

  // ===== SORT EVENT TERLARIS =====
  const bestEvents = [...events]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 5); // tampilkan top 5

  return (
    <div className="space-y-6">
      {/* ================= TOP CARDS ================= */}
      <div className="h-[40%] grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Total Pendapatan
            </p>
            <h2 className="text-2xl font-bold">
              Rp {totalRevenue.toLocaleString("id-ID")}
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Tiket Terjual
            </p>
            <h2 className="text-2xl font-bold">
              {totalTicketsSold}
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Event Berlangsung
            </p>
            <h2 className="text-2xl font-bold">
              {ongoingEvents}
            </h2>
          </CardContent>
        </Card>
      </div>

      {/* ================= BEST PERFORMANCE ================= */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Performa Event Terlaris
            </h3>

            <Button
              variant="link"
              onClick={() => navigate("/admin/events")}
            >
              Lihat semua
            </Button>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-left">Tanggal</th>
                <th className="px-4 py-3 text-left">Tiket Terjual</th>
                <th className="px-4 py-3 text-left">Pendapatan</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {bestEvents.map((event) => {
                const progress =
                  event.quota > 0
                    ? Math.round((event.sold / event.quota) * 100)
                    : 0;

                const isFinished =
                  new Date(event.date) < new Date();

                return (
                  <tr
                    key={event.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium">
                      {event.name}
                    </td>

                    <td className="px-4 py-3">
                      {event.date}
                    </td>

                    <td className="px-4 py-3 w-56">
                      <Progress value={progress} />
                      <p className="text-xs mt-1">
                        {event.sold} / {event.quota}
                      </p>
                    </td>

                    <td className="px-4 py-3">
                      Rp{" "}
                      {(event.sold * event.price).toLocaleString(
                        "id-ID"
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          isFinished
                            ? "bg-gray-200 text-gray-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {isFinished ? "Selesai" : "Berjalan"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
