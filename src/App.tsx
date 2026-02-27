import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div className="rounded-2xl border bg-white p-8">
              <h1 className="text-3xl font-bold">404</h1>
              <p className="mt-2 text-slate-600">Page not found.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}