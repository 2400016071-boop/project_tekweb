import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";

// 🔹 TAMBAHAN
import About from "./pages/About";

import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/EventCreate";

import AdminRoute from "./components/admin/AdminRoute";

function App() {
  return (
    <Routes>
      {/* USER */}
      <Route path="/" element={<Home />} />

      {/* 🔹 TAMBAHAN ABOUT */}
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
    </Routes>
  );
}

export default App;
