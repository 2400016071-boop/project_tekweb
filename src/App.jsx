import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";

import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/EventCreate";

import AdminRoute from "./components/admin/AdminRoute";

function App() {
  return (
    <Routes>
      {/* USER */}
      <Route path="/" element={<Home />} />
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
    </Routes>
  );
}

export default App;
