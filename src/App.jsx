import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Mi App</h1>

        <nav>
          <Link to="/">Inicio</Link> |{" "}
          <Link to="/about">Acerca</Link> |{" "}
          <Link to="/contact">Contacto</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h2>Bienvenido al Dashboard 🔒</h2>
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;