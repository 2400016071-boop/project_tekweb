import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

// halaman admin
import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/eventCreate";

// route proteksi admin
import AdminRoute from "./components/admin/AdminRoute";

// hapus events_data lama (sesuai kode kamu)
localStorage.removeItem("events_data");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* halaman utama / app */}
        <Route path="/*" element={<App />} />

        {/* halaman admin dilindungi AdminRoute */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/event-create"
          element={
            <AdminRoute>
              <EventCreate />
            </AdminRoute>
          }
        />

        {/* opsi: login-admin (jika mau halaman terpisah) */}
        {/* <Route path="/login-admin" element={<LoginAdminPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
