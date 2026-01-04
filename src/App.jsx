import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import LoginAdmin from "./pages/LoginAdmin";

import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/EventCreate";
import EventEdit from "./pages/admin/EventEdit";

import AdminRoute from "./components/admin/AdminRoute";

function App() {
  return (
    <Routes>
      {/* USER */}
      <Route path="/" element={<Home />} />
      <Route path="/events/:id" element={<EventDetail />} />

      {/* LOGIN ADMIN */}
      <Route path="/login-admin" element={<LoginAdmin />} />

      {/* ADMIN (PROTECTED) */}
      <Route
        path="/admin"
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

      <Route
        path="/admin/events/edit/:id"
        element={
          <AdminRoute>
            <EventEdit />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;
