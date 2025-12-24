import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;


