import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import TicketForm from "./components/user/TicketForm";
import NotFound from "./pages/NotFound";

// ADMIN
import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/EventCreate";
import AdminTransactions from "./pages/admin/AdminTransactions";
import AdminRoute from "./components/admin/AdminRoute";

export default function App() {
  return (
    <Routes>
      {/* USER */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/beli-tiket/:id" element={<TicketForm />} />

      {/* ADMIN (NESTED ROUTES) */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="event-create" element={<EventCreate />} />
        <Route path="transactions" element={<AdminTransactions />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
