import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

// ===== ADMIN PAGES =====
import Dashboard from "./pages/admin/Dashboard";
import Events from "./pages/admin/Events"; // 🔴 WAJIB
import EventCreate from "./pages/admin/EventCreate";
import Transactions from "./pages/admin/Transactions";
import SalesReport from "./pages/admin/SalesReport";
import ProfileAdmin from "./pages/admin/ProfileAdmin";

// ===== ADMIN ROUTE =====
import AdminRoute from "./components/admin/AdminRoute";

// optional
localStorage.removeItem("events_data");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/*" element={<App />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<Events />} /> {/* 🔥 INI YANG HILANG */}
          <Route path="event-create" element={<EventCreate />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="sales-report" element={<SalesReport />} />
          <Route path="profile" element={<ProfileAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
