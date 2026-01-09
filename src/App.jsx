import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import About from "./pages/About";

import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/EventCreate";

import AdminRoute from "./components/admin/AdminRoute";
import NotFound from "./pages/NotFound"; // ⬅️ TAMBAHAN

function App() {
  return (
    <Routes>
      {/* USER */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events/:id" element={<EventDetail />} />

      {/* ADMIN (PROTECTED) */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/events/create"
        element={
          <AdminRoute>
            <EventCreate />
          </AdminRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
