import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import EventCreate from "./pages/admin/EventCreate";
import EventEdit from "./pages/admin/EventEdit";

function App() {
  return (
    <Routes>
      {/* USER */}
      <Route path="/" element={<Home />} />

      {/* ADMIN */}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/events/create" element={<EventCreate />} />
      <Route path="/admin/events/edit/:id" element={<EventEdit />} />
    </Routes>
  );
}

export default App;


